document.addEventListener("DOMContentLoaded", function () {
	var genericIntegrationProperties = {}
	genericIntegrationProperties.target = document.getElementById("htmlEditor")
	genericIntegrationProperties.toolbar = document.getElementById("toolbar")

	// GenericIntegration instance.
	var genericIntegrationInstance = new WirisPlugin.GenericIntegration(
		genericIntegrationProperties
	)
	genericIntegrationInstance.init()
	genericIntegrationInstance.listeners.fire("onTargetReady", {})

	WirisPlugin.currentInstance = genericIntegrationInstance
})
