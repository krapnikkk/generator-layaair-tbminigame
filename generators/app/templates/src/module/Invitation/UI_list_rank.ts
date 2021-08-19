/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

/* eslint-disable */

import UI_item_record from "./UI_item_record";

export default class UI_list_rank extends fgui.GComponent {
	public m_status: fgui.Controller;
	public m_txt_default: fgui.GTextField;
	public m_list_rank: fgui.GList;
	public m_item: UI_item_record;
	public static URL: string = "ui://aksov0e9m5i8e";

	public static createInstance(): UI_list_rank {
		return <UI_list_rank>(fgui.UIPackage.createObject("Invitation", "list_rank"));
	}

	protected onConstruct () {
		this.m_status = this.getControllerAt(0);
		this.m_txt_default = <fgui.GTextField>(this.getChildAt(0));
		this.m_list_rank = <fgui.GList>(this.getChildAt(1));
		this.m_item = <UI_item_record>(this.getChildAt(2));
	}
}