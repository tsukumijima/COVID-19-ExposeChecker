<template>
  <v-app>
    <v-app-bar
      app
      color="deep-orange lighten-2"
      dark
    >
      <div v-if="!$vuetify.breakpoint.xs">
        COCOAログチェッカー
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <v-btn
          text
          small
          class="px-3 py-5"
          @click="installPromptEvent !== null ? installPromptEvent.prompt() : dialog = true"
        >
          <v-icon>mdi-plus-box-outline</v-icon>
          <span class="ml-1">ホーム画面に追加</span>
        </v-btn>
      </div>
      <!-- <v-btn
        href="https://github.com/ktansai/COVID-19-ExposeChecker"
        target="_blank"
        text
      >
        <span class="mr-2">github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 lighten-2">ホーム画面に追加</v-card-title>
        <v-card-text>
          ブラウザの下記ボタンを押して <b>ホーム画面に追加</b> を押すと、ホーム画面上にアイコンを作成できます。<br>
          ホーム画面のアイコンから、定期的にログを解析することをおすすめします。<br><br>
          <v-row>
            <v-col cols=6>
              <v-img src="@/assets/images/add-home-ios.png"/>
            </v-col>
            <v-col cols=6>
              <v-img src="@/assets/images/add-home-android.png"/>
            </v-col>
          </v-row>
          <p class="text-center mt-2">
            (左:iOS / 右:Android)
          </p>
          <v-img class="mx-8" src="@/assets/images/home-icon.png"/>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            閉じる
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-main>
      <ExposeChecker/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import ExposeChecker from './components/ExposeChecker.vue';

export default Vue.extend({
  name: 'App',
  components: {
    ExposeChecker,
  },
  data() {
    return {
      // ダイヤログの v-model
      dialog: false,
      // PWA のインストールプロンプトを表示するためのイベント
      installPromptEvent: null,
    }
  },
  created() {
    // PWA のインストールプロンプトを表示するためのイベントを保存する
    // ref: https://qiita.com/kan_dai/items/359c4c138dcbb94e9bb5
    window.addEventListener('beforeinstallprompt', (event) => {
      this.installPromptEvent = event;
    });
  }
});
</script>