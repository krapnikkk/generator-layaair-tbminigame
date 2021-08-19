/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

/* eslint-disable */

import UI_btn_tab_base from "./UI_btn_tab_base";
import UI_list_rank from "./UI_list_rank";
import UI_list_invitation from "./UI_list_invitation";

export default class UI_panel_ranking extends fgui.GComponent {
	public m_tab: fgui.Controller;
	public m_bg: fgui.GImage;
	public m_btn_tab_rank: UI_btn_tab_base;
	public m_btn_tab_invitation: UI_btn_tab_base;
	public m_list_rank: UI_list_rank;
	public m_list_invitation: UI_list_invitation;
	public static URL: string = "ui://aksov0e9m5i8a";

	public static createInstance(): UI_panel_ranking {
		return <UI_panel_ranking>(fgui.UIPackage.createObject("Invitation", "panel_ranking"));
	}

	protected onConstruct () {
		this.m_tab = this.getControllerAt(0);
		this.m_bg = <fgui.GImage>(this.getChildAt(0));
		this.m_btn_tab_rank = <UI_btn_tab_base>(this.getChildAt(1));
		this.m_btn_tab_invitation = <UI_btn_tab_base>(this.getChildAt(2));
		this.m_list_rank = <UI_list_rank>(this.getChildAt(3));
		this.m_list_invitation = <UI_list_invitation>(this.getChildAt(4));
	}
}