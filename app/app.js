const Vue = require("nativescript-vue");

Vue.registerElement("VideoPlayer", () => require("./nativescript-videoplayer").Video);

new Vue({

  template: `
    <Page class="page">
      <ActionBar title="ghgh"  class="action-bar" backgroundColor="#FF0000"          />
      <ScrollView>
        <StackLayout class="home-panel">
          <VideoPlayer ref="player" src="https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" autoplay="true" height="300" /> 

          <Button class="btn btn-primary" text="Play" @tap="$refs.player.nativeView.play()" />
          <Button class="btn btn-primary" text="Pause" @tap="$refs.player.nativeView.pause()" />
          <Button class="btn btn-primary" text="Go To 30 seconds" @tap="$refs.player.nativeView.seekToTime(30000)" />
        </StackLayout>
      </ScrollView>
    </Page>
  `,

}).$start();