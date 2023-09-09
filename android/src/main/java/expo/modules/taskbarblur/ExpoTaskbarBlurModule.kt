package expo.modules.taskbarblur

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import android.view.WindowManager
class ExpoTaskbarBlurModule : Module() {

  override fun definition() = ModuleDefinition {

    Name("ExpoTaskbarBlur")


    Function("enableBlur") {
      val activity = appContext.currentActivity
      activity?.runOnUiThread {
        activity.window.addFlags(WindowManager.LayoutParams.FLAG_SECURE)
      }
      "Blur enabled"
    }

    Function("disableBlur") {
      val activity = appContext.currentActivity
      activity?.runOnUiThread {
        activity.window.clearFlags(WindowManager.LayoutParams.FLAG_SECURE)
      }
      "Blur disabled"
    }

  }
}
