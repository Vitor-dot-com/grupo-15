package com.example.hackaton
//faz a navegaçao ser restrita a webview
import android.app.Activity
import android.content.Intent
import android.net.Uri
import android.webkit.WebView
import android.webkit.WebViewClient

class WebViewImp(activity: Activity) : WebViewClient() {
    private var activity: Activity? = null
    init {
             this.activity = activity
        }
        override fun shouldOverrideUrlLoading(webView: WebView, url: String): Boolean {
            if (url.contains("URL AQUI")) return false
            val intent = Intent(Intent.ACTION_VIEW, Uri.parse(url))
            activity!!.startActivity(intent)
            return true
        }
    }

