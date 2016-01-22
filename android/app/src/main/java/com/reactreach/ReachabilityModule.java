package com.reactreach;

import android.os.AsyncTask;
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
import java.net.URLConnection;

/**
 * Created by kevin on 1/18/16.
 */
public class ReachabilityModule extends ReactContextBaseJavaModule {

    public ReachabilityModule(ReactApplicationContext reactContext) { super(reactContext); }

    @Override
    public String getName() { return "ReachabilityModule"; }

    @ReactMethod
    public void test(String urlString, Promise promise) {
        DownloadTask task = new DownloadTask();
        task.promise = promise;
        task.execute(urlString);
    }

}


