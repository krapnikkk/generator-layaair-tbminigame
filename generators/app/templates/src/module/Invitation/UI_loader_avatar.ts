/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

/* eslint-disable */

export default class UI_loader_avatar extends fgui.GLabel {

	public m_mask: fgui.GGraph;
	public static URL: string = "ui://aksov0e9m5i8k";

	public static createInstance(): UI_loader_avatar {
		return <UI_loader_avatar>(fgui.UIPackage.createObject("Invitation", "loader_avatar"));
	}

	protected onConstruct () {
		this.m_mask = <fgui.GGraph>(this.getChildAt(0));
	}
}