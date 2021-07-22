/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

/* eslint-disable */

import UI_loader_avatar from "./UI_loader_avatar";

export default class UI_list_item_invitation extends fgui.GComponent {

	public m_bg_avatar: fgui.GGraph;
	public m_loader_avatar: UI_loader_avatar;
	public m_txt_nickname: fgui.GTextField;
	public m_txt_date: fgui.GTextField;
	public m_line: fgui.GImage;
	public static URL: string = "ui://aksov0e9m5i8t";

	public static createInstance(): UI_list_item_invitation {
		return <UI_list_item_invitation>(fgui.UIPackage.createObject("Invitation", "list_item_invitation"));
	}

	protected onConstruct () {
		this.m_bg_avatar = <fgui.GGraph>(this.getChildAt(0));
		this.m_loader_avatar = <UI_loader_avatar>(this.getChildAt(1));
		this.m_txt_nickname = <fgui.GTextField>(this.getChildAt(2));
		this.m_txt_date = <fgui.GTextField>(this.getChildAt(3));
		this.m_line = <fgui.GImage>(this.getChildAt(4));
	}
}