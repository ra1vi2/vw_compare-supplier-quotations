/***
@controller Name:s2p.mm.pur.srcgprojqtn.compares1.controller.CompareQuotations,
*@viewId:__component0---CompareQuotations
*/
/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
		"sap/ui/core/mvc/ControllerExtension",
		"sap/ui/core/Fragment"
	],
	function (
		ControllerExtension, Fragment
	) {
		"use strict";

		return ControllerExtension.extend("vwks.nlp.s2p.mm.srcgprojqtn.compare.ObjectPageExtController", {

			override: {
                onInit: function () {
                    //var compareComp = this.getView().byId("s2p.mm.pur.srcgprojqtn.compares1.CompareQuotations.CompareQuotationsControl");
                    //compareComp.setRequestAtLeastRowsProps("SourcingProjectItemStableUUID,SrcgProjQtnItemUUID,SrcgProjQtnItemIsBestBidder,SrcgProjQtnItemOfferingCode,SrcgProjQtnItemTotNetAmt,DisplayCurrency,SourcingProjectItemUUID");
					//compareComp.setRequestAtLeastColumnHeaderContentProps("SourcingProjectQuotationUUID,SrcgProjQuotationVersion,BusinessPartnerName,SrcgProjQtnTotNetAmt,DisplayCurrency,SourcingProjectQuotation,SrcgProjQtnOfferCurrency");
                }
            },

			/* Event handler for exchange rate information icon press
			 * @param {event} oEvent - Event triggered
			 * @public
			 */
			handleExchangeRateInfoPress: function (oEvent) {
				this.showExchangeRateInfoDialog();
			},
			/* Display exchange rate information in a dialog
			 * @public
			 */
			showExchangeRateInfoDialog: function () {
				if (!this.oMessageDialog) {
					Fragment.load({
						id: "idMessage",
						name: "vwks.nlp.s2p.mm.srcgprojqtn.compare.changes.fragments.ExchangeRateMessage",
						controller: this
					}).then(function (oDialog) {
						this.oMessageDialog = oDialog;
						this.getView().addDependent(this.oMessageDialog);
						this.oMessageDialog.open();
					}.bind(this));
				} else {
					this.oMessageDialog.open();
				}
			},
			/** this method will be called on pressing okay of exchange rate message dialog
			 * @public
			 **/
			onExchangeRateMessageOkPress: function () {
				this.oMessageDialog.close();
			}
		});
	});
