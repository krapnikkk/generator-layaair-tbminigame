/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

/* eslint-disable */

export default class UI_loader_goods extends fgui.GLabel {
	public m_mask: fgui.GImage;
	public static URL: string = "ui://aksov0e9m5i8z";

	public static createInstance(): UI_loader_goods {
		return <UI_loader_goods>(fgui.UIPackage.createObject("Invitation", "loader_goods"));
	}

	protected onConstruct () {
		this.m_mask = <fgui.GImage>(this.getChildAt(0));
	}
}