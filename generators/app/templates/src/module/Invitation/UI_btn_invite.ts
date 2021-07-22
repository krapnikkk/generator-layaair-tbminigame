/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

/* eslint-disable */

export default class UI_btn_invite extends fgui.GButton {

	public m_scale: fgui.Transition;
	public static URL: string = "ui://aksov0e9m5i8u";

	public static createInstance(): UI_btn_invite {
		return <UI_btn_invite>(fgui.UIPackage.createObject("Invitation", "btn_invite"));
	}

	protected onConstruct () {
		this.m_scale = this.getTransitionAt(0);
	}
}