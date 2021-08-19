/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

/* eslint-disable */

import UI_loader_avatar from "./UI_loader_avatar";
import UI_loader_award from "./UI_loader_award";

export default class UI_list_item_rank extends fgui.GComponent {
	public m_txt_number: fgui.GTextField;
	public m_bg_avatar: fgui.GGraph;
	public m_loader_avatar: UI_loader_avatar;
	public m_txt_nickname: fgui.GTextField;
	public m_txt_invitation: fgui.GTextField;
	public m_loader_award: UI_loader_award;
	public m_line: fgui.GImage;
	public static URL: string = "ui://aksov0e9m5i8f";

	public static createInstance(): UI_list_item_rank {
		return <UI_list_item_rank>(fgui.UIPackage.createObject("Invitation", "list_item_rank"));
	}

	protected onConstruct () {
		this.m_txt_number = <fgui.GTextField>(this.getChildAt(0));
		this.m_bg_avatar = <fgui.GGraph>(this.getChildAt(1));
		this.m_loader_avatar = <UI_loader_avatar>(this.getChildAt(2));
		this.m_txt_nickname = <fgui.GTextField>(this.getChildAt(3));
		this.m_txt_invitation = <fgui.GTextField>(this.getChildAt(4));
		this.m_loader_award = <UI_loader_award>(this.getChildAt(5));
		this.m_line = <fgui.GImage>(this.getChildAt(6));
	}
}