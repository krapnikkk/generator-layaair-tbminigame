/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Main from "../Invitation";
import UI_btn_common_base from "./UI_btn_common_base";
import UI_panel_date_activity from "./UI_panel_date_activity";
import UI_panel_ranking from "./UI_panel_ranking";
import UI_btn_tab_base from "./UI_btn_tab_base";
import UI_list_rank from "./UI_list_rank";
import UI_list_item_rank from "./UI_list_item_rank";
import UI_loader_avatar from "./UI_loader_avatar";
import UI_loader_award from "./UI_loader_award";
import UI_item_record from "./UI_item_record";
import UI_list_invitation from "./UI_list_invitation";
import UI_list_item_invitation from "./UI_list_item_invitation";
import UI_btn_invite from "./UI_btn_invite";
import UI_list_item_recommendation from "./UI_list_item_recommendation";
import UI_loader_goods from "./UI_loader_goods";

export default class InvitationBinder {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_Main.URL, UI_Main);
		fgui.UIObjectFactory.setExtension(UI_btn_common_base.URL, UI_btn_common_base);
		fgui.UIObjectFactory.setExtension(UI_panel_date_activity.URL, UI_panel_date_activity);
		fgui.UIObjectFactory.setExtension(UI_panel_ranking.URL, UI_panel_ranking);
		fgui.UIObjectFactory.setExtension(UI_btn_tab_base.URL, UI_btn_tab_base);
		fgui.UIObjectFactory.setExtension(UI_list_rank.URL, UI_list_rank);
		fgui.UIObjectFactory.setExtension(UI_list_item_rank.URL, UI_list_item_rank);
		fgui.UIObjectFactory.setExtension(UI_loader_avatar.URL, UI_loader_avatar);
		fgui.UIObjectFactory.setExtension(UI_loader_award.URL, UI_loader_award);
		fgui.UIObjectFactory.setExtension(UI_item_record.URL, UI_item_record);
		fgui.UIObjectFactory.setExtension(UI_list_invitation.URL, UI_list_invitation);
		fgui.UIObjectFactory.setExtension(UI_list_item_invitation.URL, UI_list_item_invitation);
		fgui.UIObjectFactory.setExtension(UI_btn_invite.URL, UI_btn_invite);
		fgui.UIObjectFactory.setExtension(UI_list_item_recommendation.URL, UI_list_item_recommendation);
		fgui.UIObjectFactory.setExtension(UI_loader_goods.URL, UI_loader_goods);
	}
}