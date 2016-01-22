package com.reactreach;

import android.os.AsyncTask;

import com.facebook.react.bridge.Promise;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class DownloadTask extends AsyncTask<String, Void, Void> {

    public Promise promise;

    @Override

    protected Void doInBackground(String... strings) {
        URL url;
        try {
            if (strings.length > 0) {
                url = new URL(strings[0]);
            }
            else {
                this.promise.reject("This really should not have happened");
                return null;
            }
            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
            urlConnection.setRequestMethod("HEAD");
            try {
                InputStream in = new BufferedInputStream(urlConnection.getInputStream());
                readStream(in);
                // there are all manner of bad response codes / http errors (4xx 5xx), but if we GOT one, the
                // connection / reachability is fine!
                this.promise.resolve(urlConnection.getResponseMessage());
            }
            catch (IOException e) {
                // this is a network (reachability) error
                this.promise.reject(e.getLocalizedMessage());
            }
            finally {
                urlConnection.disconnect();
            }
        }
        catch (Exception e) { // this will be some really bad didn't-even-try error
            this.promise.reject(e.getLocalizedMessage());
        }

        return null;
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
