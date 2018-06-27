## Capacitor

```
create [directory] [name] [id]  Creates a new Capacitor project
init [appName] [appId]          Initializes a new Capacitor project in the current directory
serve                           Serves a Capacitor Progressive Web App in the browser
sync [platform]                 updates + copy
update [platform]               updates the native plugins and dependencies based in package.json
copy [platform]                 copies the web app build into the native app
open [platform]                 opens the native project workspace (xcode for iOS)
add [platform]                  add a native platform project
doctor [platform]               checks the current setup for common errors
plugin:generate                 start a new Capacitor plugin

```

```
// 初始化
npx cap init ionic4-angular6-capacitor com.iszoe.ionic4

// 增加平台
npx cap add ios
npx cap add android

// copy webDir 目录
npx cap copy

// 更新插件
npm install your-cordova-plugin
npx cap update
npx cap sync


// 打开ide
npx cap open ios
npx cap open android

```

