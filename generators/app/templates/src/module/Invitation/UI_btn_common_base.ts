/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

/* eslint-disable */

export default class UI_btn_common_base extends fgui.GButton {
	public m_status: fgui.Controller;
	public static URL: string = "ui://aksov0e9m5i810";

	public static createInstance(): UI_btn_common_base {
		return <UI_btn_common_base>(fgui.UIPackage.createObject("Invitation", "btn_common_base"));
	}

	protected onConstruct () {
		this.m_status = this.getControllerAt(0);
	}
}