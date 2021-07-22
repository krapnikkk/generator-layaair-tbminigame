/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

/* eslint-disable */

import UI_loader_goods from "./UI_loader_goods";
import UI_btn_common_base from "./UI_btn_common_base";

export default class UI_list_item_recommendation extends fgui.GComponent {

	public m_bg: fgui.GImage;
	public m_loader_goods: UI_loader_goods;
	public m_txt_goodsName: fgui.GTextField;
	public m_txt_prize: fgui.GTextField;
	public m_btn_view: UI_btn_common_base;
	public m_btn_collect: UI_btn_common_base;
	public static URL: string = "ui://aksov0e9m5i8y";

	public static createInstance(): UI_list_item_recommendation {
		return <UI_list_item_recommendation>(fgui.UIPackage.createObject("Invitation", "list_item_recommendation"));
	}

	protected onConstruct () {
		this.m_bg = <fgui.GImage>(this.getChildAt(0));
		this.m_loader_goods = <UI_loader_goods>(this.getChildAt(1));
		this.m_txt_goodsName = <fgui.GTextField>(this.getChildAt(2));
		this.m_txt_prize = <fgui.GTextField>(this.getChildAt(3));
		this.m_btn_view = <UI_btn_common_base>(this.getChildAt(4));
		this.m_btn_collect = <UI_btn_common_base>(this.getChildAt(5));
	}
}