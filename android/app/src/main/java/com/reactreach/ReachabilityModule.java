package com.reactreach;

import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 * Created by kevin on 1/18/16.
 */
public class ReachabilityModule extends ReactContextBaseJavaModule {

    public ReachabilityModule(ReactApplicationContext reactContext) { super(reactContext); }

    @Override
    public String getName() { return "ReachabilityModule"; }

    @ReactMethod
    public void test(String urlString, Promise promise) {
        try {
            URL url = new URL(urlString);
            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
            urlConnection.setRequestMethod("HEAD");
            try {
                InputStream in = new BufferedInputStream(urlConnection.getInputStream());
                readStream(in);
                // there are all manner of bad response codes / http errors (4xx 5xx), but if we GOT one, the
                // connection / reachability is fine!
                promise.resolve(urlConnection.getResponseMessage());
            }
            catch (IOException e) {
                // this is a network (reachability) error
                promise.reject(e.getLocalizedMessage());
            }
            finally {
                urlConnection.disconnect();
            }
        }
        catch (Exception e) { // this will be some really bad didn't-even-try error
            promise.reject(e.getLocalizedMessage());
        }
    }

    private static String readStream(InputStream in) {
        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader =  new BufferedReader(new InputStreamReader(in));) {

            String nextLine = "";
            while ((nextLine = reader.readLine()) != null) {
                sb.append(nextLine);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return sb.toString();
    }
}
