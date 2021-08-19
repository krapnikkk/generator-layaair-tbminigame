/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

/* eslint-disable */

export default class UI_btn_tab_base extends fgui.GButton {
	public m_triangle: fgui.GImage;
	public static URL: string = "ui://aksov0e9m5i8c";

	public static createInstance(): UI_btn_tab_base {
		return <UI_btn_tab_base>(fgui.UIPackage.createObject("Invitation", "btn_tab_base"));
	}

	protected onConstruct () {
		this.m_triangle = <fgui.GImage>(this.getChildAt(3));
	}
}