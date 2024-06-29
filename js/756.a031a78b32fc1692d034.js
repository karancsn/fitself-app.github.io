(self.webpackChunkfitself=self.webpackChunkfitself||[]).push([[756],{1756:t=>{t.exports='<!DOCTYPE html>\n\x3c!--\nCopyright (c) 2022, 2023, FitSelf.\n--\x3e\n<div role="main">\n    <div class="oj-web-padding">\n        <div class="oj-flex-bar">\n            <div class="oj-flex-bar-start">\n                <span class="oj-typography-bold oj-text-color-secondary">Effective since:&nbsp;</span>\n                <span>\n                    <oj-bind-text value="[[effectiveDate]]"></oj-bind-text>\n                </span>\n            </div>\n            <div class="oj-flex-bar-end">\n                <oj-button label="Add" display="icons" chroming="outlined" on-oj-action="[[backToOrder]]">\n                    <span slot="startIcon" class="oj-ux-ico-cart-add"></span>\n                </oj-button>\n            </div>\n        </div>\n        <div>\n            <oj-label id="cart-discount">Discount&nbsp;</oj-label>\n            <oj-checkboxset id="cart-discount-checkedVals" labelled-by="cart-discount" value="{{cartDiscountSelected}}"\n                class="oj-choice-direction-row">\n                <oj-bind-for-each data="[[discountOptions]]">\n                    <template>\n                        <oj-option :id="[[$current.data.id]]" value="[[$current.data.value]]">\n                            <oj-bind-text value="[[$current.data.disc]]"></oj-bind-text>\n                        </oj-option>\n                    </template>\n                </oj-bind-for-each>\n            </oj-checkboxset>\n        </div>\n    </div>\n    <div id="cart-container">\n        <oj-table id="cart-table" aria-label="Cart Table" data="[[cartDataProvider]]" columns="{{columnArray}}"\n            style="width: 100%;">\n        </oj-table>\n        <script type="text/html" id="item-name">\n            <td>\n                <span class="oj-text-color-primary">\n                    <oj-bind-text value="[[$context.row.name]]"></oj-bind-text>\n                </span>\n                <span class="cart-data-text oj-text-color-secondary">\n                        <oj-bind-text value="[[\' - \' + $context.row.flavour]]"></oj-bind-text>\n                </span>\n                <span class="cart-data-text oj-text-color-secondary">\n                        <oj-bind-text value="[[\' \' + $context.row.quantity + \' \' + $context.row.unit]]"></oj-bind-text>\n                </span>\n            </td>\n        <\/script>\n        <script type="text/html" id="item-vol-points">\n            <td>\n                <oj-input-number value="[[$context.row.volumePoints]]" readonly label-edge="none"\n                    label-hint="volume points" converter="[[$parent.vpConverter]]"></oj-input-number>\n            </td>\n        <\/script>\n        <script type="text/html" id="item-unit-price">\n            <td>\n                <oj-input-number value="[[$context.row.unitPrice]]" readonly label-edge="none"\n                    label-hint="unit price" converter="[[$parent.amountConverter]]"></oj-input-number>\n            </td>\n        <\/script>\n        <script type="text/html" id="item-retail-price">\n            <td>\n                <oj-input-number value="[[$context.row.mrp]]" readonly label-edge="none"\n                    label-hint="max retail price" converter="[[$parent.amountConverter]]"></oj-input-number>\n            </td>\n        <\/script>\n        <script type="text/html" id="item-disc-15">\n            <td>\n                <oj-input-number value="[[$context.row.price15]]" readonly label-edge="none"\n                    label-hint="15 percent discount" converter="[[$parent.amountConverter]]"></oj-input-number>\n            </td>\n        <\/script>\n        <script type="text/html" id="item-disc-25">\n            <td>\n                <oj-input-number value="[[$context.row.price25]]" readonly label-edge="none"\n                    label-hint="25 percent discount" converter="[[$parent.amountConverter]]"></oj-input-number>\n            </td>\n        <\/script>\n        <script type="text/html" id="item-disc-35">\n            <td>\n                <oj-input-number value="[[$context.row.price35]]" readonly label-edge="none"\n                    label-hint="35 percent discount" converter="[[$parent.amountConverter]]"></oj-input-number>\n            </td>\n        <\/script>\n        <script type="text/html" id="item-disc-42">\n            <td>\n                <oj-input-number value="[[$context.row.price42]]" readonly label-edge="none"\n                    label-hint="42 percent discount" converter="[[$parent.amountConverter]]"></oj-input-number>\n            </td>\n        <\/script>\n        <script type="text/html" id="item-disc-50">\n            <td>\n                <oj-input-number value="[[$context.row.price50]]" readonly label-edge="none"\n                    label-hint="50 percent discount" converter="[[$parent.amountConverter]]"></oj-input-number>\n            </td>\n        <\/script>\n        <script type="text/html" id="item-total-label">\n            <td>\n                <span><oj-bind-text value="Total"></oj-bind-text></span>\n            </td>\n        <\/script>\n        <script type="text/html" id="item-total-quantity">\n            <td>\n                <span><oj-bind-text value="[[$parent.itemCount]]"></oj-bind-text></span>\n            </td>\n        <\/script>\n        <script type="text/html" id="item-total-volume">\n            <td>\n                <oj-input-number value="[[$parent.priceTotaller($context)]]" readonly label-edge="none"\n                    label-hint="50 percent discount" converter="[[$parent.vpConverter]]"></oj-input-number>\n            </td>\n        <\/script>\n        <script type="text/html" id="item-total-price">\n            <td>\n                <oj-input-number value="[[$parent.priceTotaller($context)]]" readonly label-edge="none"\n                    label-hint="50 percent discount" converter="[[$parent.amountConverter]]"></oj-input-number>\n            </td>\n        <\/script>\n    </div>\n</div>'}}]);
//# sourceMappingURL=756.a031a78b32fc1692d034.js.map