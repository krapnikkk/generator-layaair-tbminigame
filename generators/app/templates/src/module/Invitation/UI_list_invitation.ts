/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

/* eslint-disable */

export default class UI_list_invitation extends fgui.GComponent {

	public m_status: fgui.Controller;
	public m_txt_invitation: fgui.GRichTextField;
	public m_list_invitation: fgui.GList;
	public m_txt_tips_title: fgui.GTextField;
	public m_txt_tips_desc: fgui.GTextField;
	public m_txt_tips: fgui.GGroup;
	public static URL: string = "ui://aksov0e9m5i8s";

	public static createInstance(): UI_list_invitation {
		return <UI_list_invitation>(fgui.UIPackage.createObject("Invitation", "list_invitation"));
	}

	protected onConstruct () {
		this.m_status = this.getControllerAt(0);
		this.m_txt_invitation = <fgui.GRichTextField>(this.getChildAt(0));
		this.m_list_invitation = <fgui.GList>(this.getChildAt(1));
		this.m_txt_tips_title = <fgui.GTextField>(this.getChildAt(2));
		this.m_txt_tips_desc = <fgui.GTextField>(this.getChildAt(3));
		this.m_txt_tips = <fgui.GGroup>(this.getChildAt(4));
	}
}