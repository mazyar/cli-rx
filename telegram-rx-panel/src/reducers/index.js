import { combineReducers } from "redux";
import ui from '@bit/mazyar.m1-rx.core/core/services/ui.service.reducer'
import {localeReducer} from '@bit/mazyar.m1-rx.store/';
const security = require("@bit/mazyar.m1-rx.store/").securityReducer({});
const layout = require("@bit/mazyar.m1-rx.core/core/services/layout.reducer").default({});

export default combineReducers({ security, ui, locale:localeReducer, layout });
