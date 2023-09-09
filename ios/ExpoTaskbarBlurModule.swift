import ExpoModulesCore

public class ExpoTaskbarBlurModule: Module {
    var overlayView: UIView?
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
     
       Function("enableBlur") {
           if overlayView != nil { return } // Avoid adding multiple overlays

               guard let window = UIApplication.shared.keyWindow else { return }

               let blurEffect = UIBlurEffect(style: .light) // or .dark for a dark blur
               let blurredEffectView = UIVisualEffectView(effect: blurEffect)
               blurredEffectView.frame = window.bounds
               blurredEffectView.autoresizingMask = [.flexibleWidth, .flexibleHeight]

               window.addSubview(blurredEffectView)
               overlayView = blurredEffectView
      }

       Function("disableBlur") {
           overlayView?.removeFromSuperview()
           overlayView = nil
      }

    Name("ExpoTaskbarBlur")

  }
}
