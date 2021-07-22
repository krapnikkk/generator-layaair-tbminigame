/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

/* eslint-disable */

import UI_panel_date_activity from "./UI_panel_date_activity";
import UI_panel_ranking from "./UI_panel_ranking";
import UI_btn_invite from "./UI_btn_invite";

export default class UI_Main extends fgui.GComponent {

	public m_bg: fgui.GImage;
	public m_loader_tips: fgui.GLoader;
	public m_panel_date_activity: UI_panel_date_activity;
	public m_panel_ranking: UI_panel_ranking;
	public m_btn_invite: UI_btn_invite;
	public m_txt_tips_invite_count: fgui.GTextField;
	public m_btn_rule: fgui.GButton;
	public m_bg_polyfill: fgui.GImage;
	public m_list_recommendation: fgui.GList;
	public m_btn_jackpot: fgui.GLoader;
	public m_btn_prize: fgui.GLoader;
	public m_group_float: fgui.GGroup;
	public static URL: string = "ui://aksov0e9m5i80";

	public static createInstance(): UI_Main {
		return <UI_Main>(fgui.UIPackage.createObject("Invitation", "Main"));
	}

	protected onConstruct () {
		this.m_bg = <fgui.GImage>(this.getChildAt(0));
		this.m_loader_tips = <fgui.GLoader>(this.getChildAt(1));
		this.m_panel_date_activity = <UI_panel_date_activity>(this.getChildAt(2));
		this.m_panel_ranking = <UI_panel_ranking>(this.getChildAt(3));
		this.m_btn_invite = <UI_btn_invite>(this.getChildAt(4));
		this.m_txt_tips_invite_count = <fgui.GTextField>(this.getChildAt(5));
		this.m_btn_rule = <fgui.GButton>(this.getChildAt(6));
		this.m_bg_polyfill = <fgui.GImage>(this.getChildAt(7));
		this.m_list_recommendation = <fgui.GList>(this.getChildAt(8));
		this.m_btn_jackpot = <fgui.GLoader>(this.getChildAt(9));
		this.m_btn_prize = <fgui.GLoader>(this.getChildAt(10));
		this.m_group_float = <fgui.GGroup>(this.getChildAt(11));
	}
}