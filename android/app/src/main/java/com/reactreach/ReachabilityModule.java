package com.reactreach;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by kevin on 1/18/16.
 */
public class ReachabilityModule extends ReactContextBaseJavaModule {

    public ReachabilityModule(ReactApplicationContext reactContext) { super(reactContext); }

    @Override
    public String getName() { return "ReachabilityModule"; }

    @ReactMethod
    public void test(String host) {
// can we get here
        Log.d("ReachabilityModule", "We got here");
    }
}
