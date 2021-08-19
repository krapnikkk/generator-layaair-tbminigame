/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

/* eslint-disable */

export default class UI_panel_date_activity extends fgui.GComponent {
	public m_status: fgui.Controller;
	public m_txt_count: fgui.GTextField;
	public m_txt_date: fgui.GTextField;
	public m_txt_time: fgui.GTextField;
	public m_txt_desc_1: fgui.GTextField;
	public m_txt_desc_2: fgui.GTextField;
	public m_txt_desc_3: fgui.GTextField;
	public m_txt_desc_4: fgui.GTextField;
	public m_txt__active: fgui.GGroup;
	public m_txt_finish: fgui.GTextField;
	public static URL: string = "ui://aksov0e9m5i83";

	public static createInstance(): UI_panel_date_activity {
		return <UI_panel_date_activity>(fgui.UIPackage.createObject("Invitation", "panel_date_activity"));
	}

	protected onConstruct () {
		this.m_status = this.getControllerAt(0);
		this.m_txt_count = <fgui.GTextField>(this.getChildAt(4));
		this.m_txt_date = <fgui.GTextField>(this.getChildAt(5));
		this.m_txt_time = <fgui.GTextField>(this.getChildAt(6));
		this.m_txt_desc_1 = <fgui.GTextField>(this.getChildAt(7));
		this.m_txt_desc_2 = <fgui.GTextField>(this.getChildAt(8));
		this.m_txt_desc_3 = <fgui.GTextField>(this.getChildAt(9));
		this.m_txt_desc_4 = <fgui.GTextField>(this.getChildAt(10));
		this.m_txt__active = <fgui.GGroup>(this.getChildAt(11));
		this.m_txt_finish = <fgui.GTextField>(this.getChildAt(12));
	}
}