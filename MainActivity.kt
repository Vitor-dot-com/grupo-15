package com.example.hackaton

import androidx.appcompat.app.AppCompatActivity
import android.webkit.WebView
import android.os.Bundle
import android.webkit.WebViewClient
import kotlinx.android.synthetic.main.activity_main.*

//vai entrar na Main, cria a partir da webviewImp, cria uma variavel que
//recebe a funçao para nao sair da webView
//javascript ativado

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val webViewImp = WebViewImp(this)

        wvMain.webViewClient = webViewImp
        wvMain.loadUrl("URL AQUI")
        val webSettings = wvMain.settings
        webSettings.javaScriptEnabled = true
    }
    override fun onBackPressed() {
        val load = wvMain.url
        if(load != "E aqui") {
            wvMain.goBack()
        }
        else super.onBackPressed()

    }
}