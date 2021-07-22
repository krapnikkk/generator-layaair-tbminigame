/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

/* eslint-disable */

import UI_loader_avatar from "./UI_loader_avatar";
import UI_loader_award from "./UI_loader_award";

export default class UI_item_record extends fgui.GComponent {

	public m_ranking: fgui.Controller;
	public m_prize: fgui.Controller;
	public m_bg: fgui.GImage;
	public m_txt_number: fgui.GTextField;
	public m_bg_avatar: fgui.GGraph;
	public m_loader_avatar: UI_loader_avatar;
	public m_txt_nickname: fgui.GTextField;
	public m_txt_invitation: fgui.GTextField;
	public m_loader_award: UI_loader_award;
	public m_txt_rank_bg: fgui.GImage;
	public m_txt_rank: fgui.GTextField;
	public static URL: string = "ui://aksov0e9m5i8p";

	public static createInstance(): UI_item_record {
		return <UI_item_record>(fgui.UIPackage.createObject("Invitation", "item_record"));
	}

	protected onConstruct () {
		this.m_ranking = this.getControllerAt(0);
		this.m_prize = this.getControllerAt(1);
		this.m_bg = <fgui.GImage>(this.getChildAt(0));
		this.m_txt_number = <fgui.GTextField>(this.getChildAt(1));
		this.m_bg_avatar = <fgui.GGraph>(this.getChildAt(2));
		this.m_loader_avatar = <UI_loader_avatar>(this.getChildAt(3));
		this.m_txt_nickname = <fgui.GTextField>(this.getChildAt(4));
		this.m_txt_invitation = <fgui.GTextField>(this.getChildAt(5));
		this.m_loader_award = <UI_loader_award>(this.getChildAt(6));
		this.m_txt_rank_bg = <fgui.GImage>(this.getChildAt(7));
		this.m_txt_rank = <fgui.GTextField>(this.getChildAt(8));
	}
}