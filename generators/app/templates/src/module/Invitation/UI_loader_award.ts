/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

/* eslint-disable */

export default class UI_loader_award extends fgui.GLabel {

	public m_frame: fgui.GImage;
	public m_loader_award: fgui.GLoader;
	public static URL: string = "ui://aksov0e9m5i8m";

	public static createInstance(): UI_loader_award {
		return <UI_loader_award>(fgui.UIPackage.createObject("Invitation", "loader_award"));
	}

	protected onConstruct () {
		this.m_frame = <fgui.GImage>(this.getChildAt(0));
		this.m_loader_award = <fgui.GLoader>(this.getChildAt(1));
	}
}