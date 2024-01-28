/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/mftsccs/dist/bundle.js":
/*!*********************************************!*\
  !*** ./node_modules/mftsccs/dist/bundle.js ***!
  \*********************************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Api/Create/CreateTheCharacter.ts":
/*!**********************************************!*\
  !*** ./src/Api/Create/CreateTheCharacter.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_726__) => {

__nested_webpack_require_726__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_726__.d(__nested_webpack_exports__, {
/* harmony export */   CreateTheCharacter: () => (/* binding */ CreateTheCharacter)
/* harmony export */ });
/* harmony import */ var _DataStructures_CharacterRepository__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_726__(/*! ../../DataStructures/CharacterRepository */ "./src/DataStructures/CharacterRepository.ts");
/* harmony import */ var _DataStructures_Returner__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_726__(/*! ../../DataStructures/Returner */ "./src/DataStructures/Returner.ts");
/* harmony import */ var _DataStructures_TheCharacter__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_726__(/*! ../../DataStructures/TheCharacter */ "./src/DataStructures/TheCharacter.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_726__(/*! ../../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function CreateTheCharacter(characterData) {
    var characterData;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            characterData = _DataStructures_CharacterRepository__WEBPACK_IMPORTED_MODULE_0__.CharacterRepository.GetCharacter(characterData.data);
            if (characterData.id == 0) {
                const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_3__.BaseUrl.CreateTheCharacterDataUrl(), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(characterData),
                });
                if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                }
                const resultString = yield response.json();
                const result = resultString;
                var savingCharacter = new _DataStructures_TheCharacter__WEBPACK_IMPORTED_MODULE_2__.TheCharacter(result.userId, characterData.data, 0, 0, 4, 4, 999, 999, "", false);
                savingCharacter.id = result.id;
                _DataStructures_CharacterRepository__WEBPACK_IMPORTED_MODULE_0__.CharacterRepository.AddCharacter(savingCharacter);
                return result;
            }
            else {
                var returningData = new _DataStructures_Returner__WEBPACK_IMPORTED_MODULE_1__.Returner(characterData.id, characterData.userId, 0, false);
                return returningData;
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}


/***/ }),

/***/ "./src/Api/Create/CreateTheConceptApi.ts":
/*!***********************************************!*\
  !*** ./src/Api/Create/CreateTheConceptApi.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_4596__) => {

__nested_webpack_require_4596__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_4596__.d(__nested_webpack_exports__, {
/* harmony export */   CreateTheConceptApi: () => (/* binding */ CreateTheConceptApi)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_4596__(/*! ../../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function CreateTheConceptApi(conceptData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.CreateTheConceptUrl(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(conceptData),
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const resultString = yield response.json();
            const result = resultString;
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}


/***/ }),

/***/ "./src/Api/Create/CreateTheConnectionApi.ts":
/*!**************************************************!*\
  !*** ./src/Api/Create/CreateTheConnectionApi.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_7034__) => {

__nested_webpack_require_7034__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_7034__.d(__nested_webpack_exports__, {
/* harmony export */   CreateTheConnectionApi: () => (/* binding */ CreateTheConnectionApi)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_7034__(/*! ../../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function CreateTheConnectionApi(connectionData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var jsonData = JSON.stringify(connectionData);
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.CreateTheConnectionUrl(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonData
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = yield response.json();
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}


/***/ }),

/***/ "./src/Api/Create/CreateTheTextData.ts":
/*!*********************************************!*\
  !*** ./src/Api/Create/CreateTheTextData.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_9459__) => {

__nested_webpack_require_9459__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_9459__.d(__nested_webpack_exports__, {
/* harmony export */   CreateTextData: () => (/* binding */ CreateTextData)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_9459__(/*! ../../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function CreateTextData(textData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.CreateTheTextDataUrl(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(textData),
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const resultString = yield response.json();
            const result = resultString;
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}


/***/ }),

/***/ "./src/Api/DeleteTheConcept.ts":
/*!*************************************!*\
  !*** ./src/Api/DeleteTheConcept.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_11825__) => {

__nested_webpack_require_11825__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_11825__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteTheConcept)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_11825__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function DeleteTheConcept(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.DeleteConceptUrl(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `id=${id}`
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}


/***/ }),

/***/ "./src/Api/GetAiData.ts":
/*!******************************!*\
  !*** ./src/Api/GetAiData.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_14027__) => {

__nested_webpack_require_14027__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_14027__.d(__nested_webpack_exports__, {
/* harmony export */   GetAiData: () => (/* binding */ GetAiData)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_14027__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_14027__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _Services_InitializeSystem__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_14027__(/*! ../Services/InitializeSystem */ "./src/Services/InitializeSystem.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function GetAiData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const start = new Date().getTime();
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.GetAllAiData(), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = yield response.json();
            for (var i = 0; i < result.length; i++) {
                _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_1__.ConceptsData.AddConceptToStorage(result[i]);
            }
            console.log("got all the concepts data from ai");
            (0,_Services_InitializeSystem__WEBPACK_IMPORTED_MODULE_2__.PurgatoryDatabaseUpdated)();
            let elapsed = new Date().getTime() - start;
            console.log("The time taken is ", elapsed);
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}


/***/ }),

/***/ "./src/Api/GetAllConceptsByType.ts":
/*!*****************************************!*\
  !*** ./src/Api/GetAllConceptsByType.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_17138__) => {

__nested_webpack_require_17138__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_17138__.d(__nested_webpack_exports__, {
/* harmony export */   GetAllConceptsByType: () => (/* binding */ GetAllConceptsByType)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_17138__(/*! ./../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_17138__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetAllConceptsByType(type, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var urlencoded = new URLSearchParams();
            urlencoded.append("type", type);
            urlencoded.append("user_id", userId.toString());
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetAllConceptsByTypeUrl(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: urlencoded
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = yield response.json();
            for (var i = 0; i < result.length; i++) {
                _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.AddConcept(result[i]);
            }
            console.log("added");
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}


/***/ }),

/***/ "./src/Api/GetAllConnectionsOfComposition.ts":
/*!***************************************************!*\
  !*** ./src/Api/GetAllConnectionsOfComposition.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_20063__) => {

__nested_webpack_require_20063__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_20063__.d(__nested_webpack_exports__, {
/* harmony export */   GetAllConnectionsOfComposition: () => (/* binding */ GetAllConnectionsOfComposition),
/* harmony export */   GetAllConnectionsOfCompositionOnline: () => (/* binding */ GetAllConnectionsOfCompositionOnline)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_20063__(/*! ../DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_20063__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetAllConnectionsOfComposition(composition_id) {
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        connectionList = yield _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.GetConnectionsOfCompositionLocal(composition_id);
        console.log("this is the connection list from local", connectionList);
        if (connectionList.length == 0) {
            var connectionListString = yield GetAllConnectionsOfCompositionOnline(composition_id);
            connectionList = connectionListString;
        }
        else {
            console.log("not waiting for this");
            GetAllConnectionsOfCompositionOnline(composition_id);
            console.log("forward from this");
        }
        return connectionList;
    });
}
function GetAllConnectionsOfCompositionOnline(composition_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var connectionList = [];
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetAllConnectionsOfCompositionUrl(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `composition_id=${composition_id}`
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            console.log("waiting and watching");
            const result = yield response.json();
            for (var i = 0; i < result.length; i++) {
                _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.AddConnection(result[i]);
                // ConnectionData.AddToDictionary(result[i]);
                connectionList.push(result[i]);
            }
            return connectionList;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}


/***/ }),

/***/ "./src/Api/GetAllConnectionsOfCompositionBulk.ts":
/*!*******************************************************!*\
  !*** ./src/Api/GetAllConnectionsOfCompositionBulk.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_24064__) => {

__nested_webpack_require_24064__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_24064__.d(__nested_webpack_exports__, {
/* harmony export */   GetAllConnectionsOfCompositionBulk: () => (/* binding */ GetAllConnectionsOfCompositionBulk),
/* harmony export */   GetAllConnectionsOfCompositionOnline: () => (/* binding */ GetAllConnectionsOfCompositionOnline)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_24064__(/*! ../DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_24064__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _GetConceptBulk__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_24064__(/*! ./GetConceptBulk */ "./src/Api/GetConceptBulk.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function GetAllConnectionsOfCompositionBulk(composition_ids = []) {
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        var conceptList = [];
        var connectionListString = yield GetAllConnectionsOfCompositionOnline(composition_ids);
        connectionList = connectionListString;
        if (connectionList.length > 0) {
            for (let i = 0; i < connectionList.length; i++) {
                if (!conceptList.includes(connectionList[i].ofTheConceptId)) {
                    conceptList.push(connectionList[i].ofTheConceptId);
                }
                if (!conceptList.includes(connectionList[i].toTheConceptId)) {
                    conceptList.push(connectionList[i].toTheConceptId);
                }
            }
            yield (0,_GetConceptBulk__WEBPACK_IMPORTED_MODULE_2__.GetConceptBulk)(conceptList);
        }
        return connectionList;
    });
}
function GetAllConnectionsOfCompositionOnline(composition_ids = []) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var connectionList = [];
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetAllConnectionsOfCompositionBulkUrl(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(composition_ids)
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = yield response.json();
            for (var i = 0; i < result.length; i++) {
                _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.AddConnection(result[i]);
                connectionList.push(result[i]);
            }
            return connectionList;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}


/***/ }),

/***/ "./src/Api/GetAllLinkerConnectionsFromTheConcept.ts":
/*!**********************************************************!*\
  !*** ./src/Api/GetAllLinkerConnectionsFromTheConcept.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_28234__) => {

__nested_webpack_require_28234__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_28234__.d(__nested_webpack_exports__, {
/* harmony export */   GetAllLinkerConnectionsFromTheConcept: () => (/* binding */ GetAllLinkerConnectionsFromTheConcept)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_28234__(/*! ../app */ "./src/app.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function GetAllLinkerConnectionsFromTheConcept(conceptId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var connections = [];
            const start = new Date().getTime();
            const response = yield fetch(_app__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.GetAllLinkerConnectionOfConceptUrl() + `?conceptId=${conceptId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = yield response.json();
            for (var i = 0; i < result.length; i++) {
                var connection = result[i];
                connections.push(connection);
            }
            return connections;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}


/***/ }),

/***/ "./src/Api/GetConcept.ts":
/*!*******************************!*\
  !*** ./src/Api/GetConcept.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_30775__) => {

__nested_webpack_require_30775__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_30775__.d(__nested_webpack_exports__, {
/* harmony export */   GetConcept: () => (/* binding */ GetConcept)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_30775__(/*! ./../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_30775__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetConcept(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var conceptUse = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.GetConcept(id);
            if (conceptUse.id != 0) {
                return conceptUse;
            }
            else {
                const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConceptUrl(), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: `id=${id}`
                });
                if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                }
                const result = yield response.json();
                if (result.id > 0) {
                    _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.AddConcept(result);
                    return result;
                }
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}


/***/ }),

/***/ "./src/Api/GetConceptBulk.ts":
/*!***********************************!*\
  !*** ./src/Api/GetConceptBulk.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_33702__) => {

__nested_webpack_require_33702__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_33702__.d(__nested_webpack_exports__, {
/* harmony export */   GetConceptBulk: () => (/* binding */ GetConceptBulk)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_33702__(/*! ./../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_33702__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetConceptBulk(conceptIds) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var bulkConceptFetch = [];
            for (let i = 0; i < conceptIds.length; i++) {
                let conceptUse = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.GetConcept(conceptIds[i]);
                if (conceptUse.id == 0) {
                    bulkConceptFetch.push(conceptIds[i]);
                }
            }
            if (bulkConceptFetch.length == 0) {
                return bulkConceptFetch;
            }
            else {
                const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConceptBulkUrl(), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(bulkConceptFetch)
                });
                if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                }
                const result = yield response.json();
                if (result.length > 0) {
                    for (let i = 0; i < result.length; i++) {
                        let concept = result[i];
                        _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.AddConcept(concept);
                    }
                }
                return result;
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}


/***/ }),

/***/ "./src/Api/GetConceptByCharacterAndType.ts":
/*!*************************************************!*\
  !*** ./src/Api/GetConceptByCharacterAndType.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_37112__) => {

__nested_webpack_require_37112__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_37112__.d(__nested_webpack_exports__, {
/* harmony export */   GetConceptByCharacterAndType: () => (/* binding */ GetConceptByCharacterAndType)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_37112__(/*! ./../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_37112__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetConceptByCharacterAndType(characterValue, typeId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.GetConceptByCharacterAndTypeLocal(characterValue, typeId);
            if (concept == null || concept.id == 0) {
                var json = {
                    'character_value': `${characterValue}`,
                    'type_id': typeId
                };
                var toSendJson = JSON.stringify(json);
                const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConceptByCharacterAndTypeUrl(), {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: toSendJson,
                });
                if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                }
                var conceptString = yield response.json();
                concept = conceptString;
                _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.AddConcept(concept);
            }
            return concept;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}


/***/ }),

/***/ "./src/Api/GetConceptByCharacterValue.ts":
/*!***********************************************!*\
  !*** ./src/Api/GetConceptByCharacterValue.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_40387__) => {

__nested_webpack_require_40387__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_40387__.d(__nested_webpack_exports__, {
/* harmony export */   GetConceptByCharacterValue: () => (/* binding */ GetConceptByCharacterValue)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_40387__(/*! ./../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_40387__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetConceptByCharacterValue(characterValue) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConceptByCharacterValueUrl(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `character_value=${characterValue}`
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            else {
                const result = yield response.json();
                if (result.id > 0) {
                    _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.AddConcept(result);
                    return result;
                }
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}


/***/ }),

/***/ "./src/Api/GetConnection.ts":
/*!**********************************!*\
  !*** ./src/Api/GetConnection.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_43163__) => {

__nested_webpack_require_43163__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_43163__.d(__nested_webpack_exports__, {
/* harmony export */   GetConnection: () => (/* binding */ GetConnection)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_43163__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_43163__(/*! ../DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetConnection(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var connectionUse = yield _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_1__.ConnectionData.GetConnection(id);
            if (connectionUse.id != 0) {
                return connectionUse;
            }
            else {
                console.log("getting connection from online");
                const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.GetConnectionUrl(), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: `id=${id}`
                });
                if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                }
                const result = yield response.json();
                _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_1__.ConnectionData.AddConnection(result);
                console.log("this is the connection added", result);
                return result;
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}


/***/ }),

/***/ "./src/Api/GetConnectionOfTheConcept.ts":
/*!**********************************************!*\
  !*** ./src/Api/GetConnectionOfTheConcept.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_46247__) => {

__nested_webpack_require_46247__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_46247__.d(__nested_webpack_exports__, {
/* harmony export */   GetConnectionOfTheConcept: () => (/* binding */ GetConnectionOfTheConcept)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_46247__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function GetConnectionOfTheConcept(typeId, ofTheConceptId, userId, inpage = 10, page = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var urlencoded = new URLSearchParams();
            urlencoded.append("typeId", `${typeId}`);
            urlencoded.append("ofTheConceptId", `${ofTheConceptId}`);
            urlencoded.append("userId", `${userId}`);
            urlencoded.append("inpage", `${inpage}`);
            urlencoded.append("page", `${page}`);
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.GetAllConnectionsOfConceptUrl(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: urlencoded
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = yield response.json();
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}


/***/ }),

/***/ "./src/Api/GetReservedIds.ts":
/*!***********************************!*\
  !*** ./src/Api/GetReservedIds.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_48978__) => {

__nested_webpack_require_48978__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_48978__.d(__nested_webpack_exports__, {
/* harmony export */   GetReservedIds: () => (/* binding */ GetReservedIds)
/* harmony export */ });
/* harmony import */ var _DataStructures_ReservedIds__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_48978__(/*! ../DataStructures/ReservedIds */ "./src/DataStructures/ReservedIds.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_48978__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetReservedIds() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetReservedIdUrl(), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = yield response.json();
            for (var i = 0; i < result.length; i++) {
                _DataStructures_ReservedIds__WEBPACK_IMPORTED_MODULE_0__.ReservedIds.AddId(result[i]);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}


/***/ }),

/***/ "./src/Api/RecursiveSearch.ts":
/*!************************************!*\
  !*** ./src/Api/RecursiveSearch.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_51572__) => {

__nested_webpack_require_51572__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_51572__.d(__nested_webpack_exports__, {
/* harmony export */   RecursiveSearchApi: () => (/* binding */ RecursiveSearchApi)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_51572__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _DataStructures_SearchQuery__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_51572__(/*! ../DataStructures/SearchQuery */ "./src/DataStructures/SearchQuery.ts");
/* harmony import */ var _Services_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_51572__(/*! ../Services/GetCompositionBulk */ "./src/Services/GetCompositionBulk.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function RecursiveSearchApi(composition = 0, listLinkers = [], textSearch = "") {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var searchQuery = new _DataStructures_SearchQuery__WEBPACK_IMPORTED_MODULE_1__.SearchQuery();
            searchQuery.composition = composition;
            searchQuery.listLinkers = listLinkers;
            searchQuery.textSearch = textSearch;
            var raw = JSON.stringify(searchQuery);
            var Connections = [];
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEwMjY3IiwiZW1haWwiOiJuaXNjYWxiaGFuZGFyaTEyQGdtYWlsLmNvbSIsInVwbiI6IjEwMDEyODM5MiIsInByaW1hcnlzaWQiOiIxMDAyMDcxMTAiLCJuYmYiOjE3MDUyMjAxNTMsImV4cCI6MTcwNTMwNjU1MywiaWF0IjoxNzA1MjIwMDkzfQ.60UmKDgfGpEtWXWBkdCThnIWehgsDZVjn1SrjqRXI2Y");
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.RecursiveSearchUrl(), {
                method: 'POST',
                headers: myHeaders,
                body: raw
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = yield response.json();
            var conceptIds = result.compositionIds;
            var connections = result.connections;
            var concepts = [];
            concepts = yield (0,_Services_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_2__.GetCompositionBulkWithDataId)(conceptIds);
            return concepts;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}


/***/ }),

/***/ "./src/DataStructures/BaseUrl.ts":
/*!***************************************!*\
  !*** ./src/DataStructures/BaseUrl.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_55292__) => {

__nested_webpack_require_55292__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_55292__.d(__nested_webpack_exports__, {
/* harmony export */   BaseUrl: () => (/* binding */ BaseUrl)
/* harmony export */ });
class BaseUrl {
    // static GetConceptUrl:string = this.BASE_URL + '/api/getConcept';
    static GetConceptUrl() {
        return this.BASE_URL + '/api/getConcept';
    }
    static GetConnectionUrl() {
        return this.BASE_URL + '/api/get-connection-by-id';
    }
    static GetConceptBulkUrl() {
        return this.BASE_URL + '/api/get_concept_bulk';
    }
    static GetAllConceptsOfUserUrl() {
        return this.BASE_URL + '/api/get_all_concepts_of_user';
    }
    static GetAllConnectionsOfUserUrl() {
        return this.BASE_URL + '/api/get_all_connections_of_user';
    }
    static GetAllConnectionsOfCompositionUrl() {
        return this.BASE_URL + '/api/get_all_connections_of_composition';
    }
    static GetAllConnectionsOfCompositionBulkUrl() {
        return this.BASE_URL + '/api/get_all_connections_of_composition_bulk';
    }
    static GetConceptByCharacterValueUrl() {
        return this.BASE_URL + '/api/get_concept_by_character_value';
    }
    static GetConceptByCharacterAndTypeUrl() {
        return this.BASE_URL + '/api/get_concept_by_character_and_type';
    }
    static GetCharacterByCharacterUrl() {
        return this.BASE_URL + '/api/get_character_by_character';
    }
    static GetAllConceptsByTypeUrl() {
        return this.BASE_URL + '/api/get_all_concepts_by_type';
    }
    static GetAllConnectionsOfConceptUrl() {
        return this.BASE_URL + '/api/get-link-connections';
    }
    static GetAllAiData() {
        return this.AI_URL + '/api/get_ranked_type_id?inpage=300' || 0 || 0;
    }
    static GetAllPrefetchConnectionsUrl() {
        return this.BASE_URL + '/api/get_all_connections_of_user?inpage=500';
    }
    static GetAllLinkerConnectionOfConceptUrl() {
        return this.BASE_URL + '/api/get-all-linkers-from-concept';
    }
    static DeleteConceptUrl() {
        return this.BASE_URL + '/api/delete_concept';
    }
    static RecursiveSearchUrl() {
        return this.BASE_URL + '/api/recursivesearch-concept-connection';
    }
    //////////////////////////////////////////////////////////////////////////////
    //////////////// API For Reserved Ids ///////////////////////////////////////
    static GetReservedIdUrl() {
        return this.BASE_URL + '/api/get_reserved_ids';
    }
    /////////////////////////////////////////////////////////////////////////////
    ////////////////API For Creating Data //////////////////////////////////////
    static CreateTheTextDataUrl() {
        return this.BASE_URL + '/api/create_text_data';
    }
    static CreateTheCharacterDataUrl() {
        return this.BASE_URL + '/api/create_character_data';
    }
    static CreateTheConceptUrl() {
        return this.BASE_URL + '/api/create_the_concept';
    }
    static CreateTheConnectionUrl() {
        return this.BASE_URL + '/api/create_the_connection';
    }
}
BaseUrl.BASE_URL = "";
BaseUrl.AI_URL = "https://ai.freeschema.com";


/***/ }),

/***/ "./src/DataStructures/BinaryCharacterTree.ts":
/*!***************************************************!*\
  !*** ./src/DataStructures/BinaryCharacterTree.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_58716__) => {

__nested_webpack_require_58716__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_58716__.d(__nested_webpack_exports__, {
/* harmony export */   BinaryCharacterTree: () => (/* binding */ BinaryCharacterTree)
/* harmony export */ });
/* harmony import */ var _IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_58716__(/*! ./IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_58716__(/*! ./Node */ "./src/DataStructures/Node.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class BinaryCharacterTree {
    static waitForDataToLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (_IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__.IdentifierFlags.isCharacterLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(BinaryCharacterTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static addNodeToTree(node) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.characterRoot == null) {
                this.characterRoot = node;
                return this.characterRoot;
            }
            else {
                this.characterRoot = this.characterRoot.addCharacterNode(node, this.characterRoot, this.characterRoot.height);
            }
            return this.characterRoot;
        });
    }
    static removeNodeByCharacter(character, id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.characterRoot) {
                this.characterRoot.removeNodeWithVariants(this.characterRoot, character, id);
            }
        });
    }
    static countNumberOfNodes() {
        if (this.characterRoot) {
            return this.characterRoot.countNodeBelow(this.characterRoot);
        }
        return 0;
    }
    static addConceptToTree(concept) {
        if (concept.characterValue != "") {
            var node = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(concept.characterValue, concept, null, null);
            this.addNodeToTree(node);
        }
    }
    static getNodeFromTree(value) {
        if (this.characterRoot) {
            var Node = this.characterRoot.getCharacterFromNode(value, this.characterRoot);
            return Node;
        }
        return this.characterRoot;
    }
    static getCharacterAndTypeFromTree(value, typeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return null;
            }
            if (this.characterRoot) {
                console.log("searching .................");
                console.log(value);
                var Node = this.characterRoot.getFromNodeWithCharacterAndType(value, typeId, this.characterRoot);
                return Node;
            }
            return this.characterRoot;
        });
    }
    static removeConceptCharacter(id) {
        if (this.characterRoot) {
            this.characterRoot = this.characterRoot.removeNode(this.characterRoot, id);
        }
    }
}
BinaryCharacterTree.characterRoot = null;


/***/ }),

/***/ "./src/DataStructures/BinaryTree.ts":
/*!******************************************!*\
  !*** ./src/DataStructures/BinaryTree.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_63082__) => {

__nested_webpack_require_63082__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_63082__.d(__nested_webpack_exports__, {
/* harmony export */   BinaryTree: () => (/* binding */ BinaryTree)
/* harmony export */ });
/* harmony import */ var _BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_63082__(/*! ./BinaryCharacterTree */ "./src/DataStructures/BinaryCharacterTree.ts");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_63082__(/*! ./Node */ "./src/DataStructures/Node.ts");
/* harmony import */ var _IdentifierFlags__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_63082__(/*! ./IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class BinaryTree {
    static addNodeToTree(node) {
        if (this.root == null) {
            this.root = node;
            return this.root;
        }
        else {
            this.root = this.root.addNode(node, this.root, this.root.height);
        }
    }
    static waitForDataToLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (_IdentifierFlags__WEBPACK_IMPORTED_MODULE_2__.IdentifierFlags.isDataLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(BinaryTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static addConceptToTree(concept) {
        var node = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(concept.id, concept, null, null);
        var characterNode = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(concept.characterValue, concept, null, null);
        _BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_0__.BinaryCharacterTree.addNodeToTree(characterNode);
        this.addNodeToTree(node);
    }
    static getNodeFromTree(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return null;
            }
            if (this.root) {
                var Node = this.root.getFromNode(id, this.root);
                return Node;
            }
            return null;
        });
    }
    static removeNodeFromTree(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.root) {
                this.root = this.root.removeNode(this.root, id);
            }
        });
    }
    static countNumberOfNodes() {
        if (this.root) {
            return this.root.countNodeBelow(this.root);
        }
        return 0;
    }
}
BinaryTree.root = null;


/***/ }),

/***/ "./src/DataStructures/BinaryTypeTree.ts":
/*!**********************************************!*\
  !*** ./src/DataStructures/BinaryTypeTree.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_66834__) => {

__nested_webpack_require_66834__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_66834__.d(__nested_webpack_exports__, {
/* harmony export */   BinaryTypeTree: () => (/* binding */ BinaryTypeTree)
/* harmony export */ });
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_66834__(/*! ../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_66834__(/*! ./IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_66834__(/*! ./Node */ "./src/DataStructures/Node.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class BinaryTypeTree {
    static addNodeToTree(node) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.typeRoot == null) {
                this.typeRoot = node;
                return this.typeRoot;
            }
            else {
                this.typeRoot = this.typeRoot.addTypeNode(node, this.typeRoot, this.typeRoot.height);
            }
            return this.typeRoot;
        });
    }
    static addConceptToTree(concept) {
        if (concept.typeId != 0) {
            var node = new _Node__WEBPACK_IMPORTED_MODULE_2__.Node(concept.typeId, concept, null, null);
            this.addNodeToTree(node);
        }
    }
    static removeTypeConcept(typeId, id) {
        if (this.typeRoot) {
            this.typeRoot = this.typeRoot.removeNodeWithVariants(this.typeRoot, typeId, id);
        }
    }
    static getNodeFromTree(id) {
        if (this.typeRoot) {
            var Node = this.typeRoot.getFromNode(id, this.typeRoot);
            return Node;
        }
        return this.typeRoot;
    }
    static getTypeVariantsFromTree(typeId) {
        var Node = this.getNodeFromTree(typeId);
        var concepts = [];
        if (Node) {
            concepts.push(Node === null || Node === void 0 ? void 0 : Node.value);
            for (let i = 0; i < Node.variants.length; i++) {
                concepts.push(Node.variants[i].value);
            }
            return concepts;
        }
    }
    static waitForDataToLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isTypeLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(BinaryTypeTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static getTypeVariantsFromTreeWithUserId(typeId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            var concepts = [];
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return concepts;
            }
            var Node = this.getNodeFromTree(typeId);
            if (Node) {
                if (Node.value.userId == userId) {
                    concepts.push(Node === null || Node === void 0 ? void 0 : Node.value);
                }
                for (let i = 0; i < Node.variants.length; i++) {
                    if (Node.variants[i].value.userId == userId) {
                        var isPresent = false;
                        for (let j = 0; j < concepts.length; j++) {
                            if (concepts[j].id == Node.variants[i].value.id) {
                                isPresent = true;
                            }
                        }
                        if (!isPresent) {
                            concepts.push(Node.variants[i].value);
                        }
                    }
                }
            }
            return concepts;
        });
    }
    static getTypeVariantsWithCharacterValue(characterValue, typeId) {
        return __awaiter(this, void 0, void 0, function* () {
            var concept = new _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return concept;
            }
            var Node = this.getNodeFromTree(typeId);
            if (Node) {
                if (Node.value.characterValue == characterValue) {
                    concept = Node.value;
                }
                for (let i = 0; i < Node.variants.length; i++) {
                    if (Node.variants[i].value.characterValue == characterValue) {
                        concept = Node.variants[i].value;
                    }
                }
            }
            return concept;
        });
    }
    static countNumberOfNodes() {
        if (this.typeRoot) {
            return this.typeRoot.countNodeBelow(this.typeRoot);
        }
        return 0;
    }
}
BinaryTypeTree.typeRoot = null;


/***/ }),

/***/ "./src/DataStructures/CharacterRepository.ts":
/*!***************************************************!*\
  !*** ./src/DataStructures/CharacterRepository.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_72942__) => {

__nested_webpack_require_72942__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_72942__.d(__nested_webpack_exports__, {
/* harmony export */   CharacterRepository: () => (/* binding */ CharacterRepository)
/* harmony export */ });
/* harmony import */ var _TheCharacter__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_72942__(/*! ./TheCharacter */ "./src/DataStructures/TheCharacter.ts");

class CharacterRepository {
    constructor() {
        this.name = "character Repository";
    }
    static AddCharacter(character) {
        this.characterData[character.id] = character;
    }
    static GetCharacter(value) {
        var theCharacter = new _TheCharacter__WEBPACK_IMPORTED_MODULE_0__.TheCharacter(0, "0", 0, 0, 0, 0, 0, 0, "0", false);
        for (var i = 0; i < this.characterData.length; i++) {
            if (this.characterData[i].data == value) {
                theCharacter = this.characterData[i];
            }
        }
        return theCharacter;
    }
}
CharacterRepository.characterData = [];


/***/ }),

/***/ "./src/DataStructures/Concept.ts":
/*!***************************************!*\
  !*** ./src/DataStructures/Concept.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_74212__) => {

__nested_webpack_require_74212__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_74212__.d(__nested_webpack_exports__, {
/* harmony export */   Concept: () => (/* binding */ Concept)
/* harmony export */ });
class Concept {
    constructor(id, userId, typeId, typeUserId, categoryId, categoryUserId, referentId, referentUserId, characterValue, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId, isNew = false) {
        this.isTemp = false;
        this.id = id;
        this.userId = userId;
        this.typeId = typeId;
        this.typeUserId = typeUserId;
        this.categoryId = categoryId;
        this.categoryUserId = categoryUserId;
        this.referentId = referentId;
        this.referent = referentId;
        this.referentUserId = referentUserId;
        this.characterValue = `${characterValue}`;
        this.securityId = securityId;
        this.securityUserId = securityUserId;
        this.accessId = accessId;
        this.accessUserId = accessUserId;
        this.sessionId = sessionId;
        this.sessionUserId = sessionUserId;
        this.x = 0;
        this.y = 0;
        this.type = null;
        this.isNew = isNew;
        // ConceptsData.AddConcept(this);
    }
    getType() {
        console.log(this.typeId);
    }
}


/***/ }),

/***/ "./src/DataStructures/ConceptData.ts":
/*!*******************************************!*\
  !*** ./src/DataStructures/ConceptData.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_75769__) => {

__nested_webpack_require_75769__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_75769__.d(__nested_webpack_exports__, {
/* harmony export */   ConceptsData: () => (/* binding */ ConceptsData)
/* harmony export */ });
/* harmony import */ var _Concept__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_75769__(/*! ./Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _Database_indexeddb__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_75769__(/*! ../Database/indexeddb */ "./src/Database/indexeddb.ts");
/* harmony import */ var _BinaryTree__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_75769__(/*! ./BinaryTree */ "./src/DataStructures/BinaryTree.ts");
/* harmony import */ var _BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_75769__(/*! ./BinaryCharacterTree */ "./src/DataStructures/BinaryCharacterTree.ts");
/* harmony import */ var _BinaryTypeTree__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_75769__(/*! ./BinaryTypeTree */ "./src/DataStructures/BinaryTypeTree.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class ConceptsData {
    constructor() {
        this.name = "conceptsArray";
    }
    static CheckContains(concept) {
        var contains = false;
        for (var i = 0; i < this.conceptsArray.length; i++) {
            if (this.conceptsArray[i].id == concept.id) {
                contains = true;
            }
        }
        return contains;
    }
    static AddConceptToStorage(concept) {
        if (concept.id > 0) {
            (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_1__.storeToDatabase)("concept", concept);
        }
    }
    static AddConcept(concept) {
        if (concept.id > 0) {
            //var contains = this.CheckContains(concept);
            // this.conceptDictionary[concept.id] = concept;
            //    if(contains){
            //   this.RemoveConcept(concept);
            //  }
            (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_1__.storeToDatabase)("concept", concept);
            _BinaryTree__WEBPACK_IMPORTED_MODULE_2__.BinaryTree.addConceptToTree(concept);
            _BinaryTypeTree__WEBPACK_IMPORTED_MODULE_4__.BinaryTypeTree.addConceptToTree(concept);
            _BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_3__.BinaryCharacterTree.addConceptToTree(concept);
        }
    }
    static AddConceptToMemory(concept) {
        if (concept.id > 0) {
            //var contains = this.CheckContains(concept);
            // this.conceptDictionary[concept.id] = concept;
            //    if(contains){
            //   this.RemoveConcept(concept);
            //  }
            _BinaryTree__WEBPACK_IMPORTED_MODULE_2__.BinaryTree.addConceptToTree(concept);
            _BinaryTypeTree__WEBPACK_IMPORTED_MODULE_4__.BinaryTypeTree.addConceptToTree(concept);
            _BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_3__.BinaryCharacterTree.addConceptToTree(concept);
        }
    }
    static AddConceptTemporary(concept) {
        var contains = this.CheckContains(concept);
        this.conceptDictionary[concept.id] = concept;
        if (contains) {
            this.RemoveConcept(concept);
        }
        this.conceptsArray.push(concept);
    }
    static RemoveConcept(concept) {
        for (var i = 0; i < this.conceptsArray.length; i++) {
            if (this.conceptsArray[i].id == concept.id) {
                this.conceptsArray.splice(i, 1);
            }
        }
        (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_1__.removeFromDatabase)("concept", concept.id);
    }
    static GetConcept(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var myConcept = new _Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
            var node = yield _BinaryTree__WEBPACK_IMPORTED_MODULE_2__.BinaryTree.getNodeFromTree(id);
            if (node === null || node === void 0 ? void 0 : node.value) {
                var returnedConcept = node.value;
                if (returnedConcept) {
                    myConcept = returnedConcept;
                }
            }
            // if(myConcept.id == 0 || myConcept == null){
            //     for(var i=0; i<this.conceptsArray.length; i++){
            //         if(this.conceptsArray[i].id == id){
            //             myConcept = this.conceptsArray[i];
            //         }
            //     }
            // }
            return myConcept;
        });
    }
    static GetConceptByCharacter(characterValue) {
        return __awaiter(this, void 0, void 0, function* () {
            var concept = new _Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
            //  for(var i=0; i<this.conceptsArray.length; i++){
            //      if(this.conceptsArray[i].characterValue == characterValue){
            //         concept = this.conceptsArray[i];
            //      }
            //  }
            var Node = _BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_3__.BinaryCharacterTree.getNodeFromTree(characterValue);
            if (Node) {
                console.log("got the character");
                concept = Node.value;
            }
            // console.log(characterValue);
            // var Node = BinaryCharacterTree.getNodeFromTree(characterValue);
            // if(Node){
            //     console.log(Node.value);
            //     return Node.value;
            // }
            return concept;
        });
    }
    static GetConceptByCharacterAndTypeLocal(character_value, typeId) {
        return __awaiter(this, void 0, void 0, function* () {
            var concept = new _Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
            //var Node = await BinaryCharacterTree.getCharacterAndTypeFromTree(character_value,typeId);
            concept = yield _BinaryTypeTree__WEBPACK_IMPORTED_MODULE_4__.BinaryTypeTree.getTypeVariantsWithCharacterValue(character_value, typeId);
            // if(Node){
            //     concept =  Node.value;
            //     console.log("found the output");
            //     console.log(concept);
            // }
            return concept;
        });
    }
    static GetConceptsByTypeId(typeId) {
        var myConcept;
        let ConceptList = [];
        myConcept = null;
        for (var i = 0; i < this.conceptsArray.length; i++) {
            if (this.conceptsArray[i].typeId == typeId) {
                ConceptList.push(this.conceptsArray[i]);
            }
        }
        //  getFromDatabaseWithType("concept","typeId",typeId).then(conceptList=>{
        //     console.log("thi sis my list");
        //  });
        //   var dbConceptList = await getFromDatabaseWithTypeOld("concept","typeId", typeId);
        //   console.log(dbConceptList);
        //   if(Array.isArray(dbConceptList)){
        //         console.log(dbConceptList);
        //         console.log(dbConceptList.length);
        //  for(var i=0; i< dbConceptList.length; i++){
        //     console.log("here to push firsts");
        //     var contains: boolean = false;
        //     for(var j=0; j< ConceptList.length; j++){
        //         if(dbConceptList[i].id == ConceptList[j].id){
        //             contains = true;
        //         }
        //     }
        //     console.log("here to push");
        //     if(!contains){
        //         ConceptList.push(dbConceptList[i]);
        //     }
        //  }
        // }
        // console.log("this is the concept list");
        // console.log(ConceptList);
        return ConceptList;
    }
    static GetConceptsByTypeIdAndUser(typeId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let ConceptList = [];
            ConceptList = yield _BinaryTypeTree__WEBPACK_IMPORTED_MODULE_4__.BinaryTypeTree.getTypeVariantsFromTreeWithUserId(typeId, userId);
            return ConceptList;
        });
    }
    static GetBinaryCharacterTree() {
        return _BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_3__.BinaryCharacterTree.characterRoot;
    }
    getName() {
        return this.name;
    }
}
ConceptsData.conceptsArray = [];
ConceptsData.conceptDictionary = [];


/***/ }),

/***/ "./src/DataStructures/Connection.ts":
/*!******************************************!*\
  !*** ./src/DataStructures/Connection.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_84887__) => {

__nested_webpack_require_84887__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_84887__.d(__nested_webpack_exports__, {
/* harmony export */   Connection: () => (/* binding */ Connection)
/* harmony export */ });
/* harmony import */ var _Concept__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_84887__(/*! ./Concept */ "./src/DataStructures/Concept.ts");

class Connection {
    constructor(id = 0, ofTheConceptId, toTheConceptId, ofTheConceptUserId, toTheConceptUserId, userId, typeId, typeUserId, orderId, orderUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId) {
        this.isTemp = false;
        this.type = new _Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
        this.id = id;
        this.OfTheConceptId = ofTheConceptId;
        this.ToTheConceptId = toTheConceptId;
        this.ofTheConceptId = ofTheConceptId;
        this.toTheConceptId = toTheConceptId;
        this.OfTheConceptUserId = ofTheConceptUserId;
        this.ToTheConceptUserId = toTheConceptUserId;
        this.userId = userId;
        this.typeId = typeId;
        this.typeUserId = typeUserId;
        this.orderId = orderId;
        this.orderUserId = orderUserId;
        this.securityId = securityId;
        this.securityUserId = securityUserId;
        this.accessId = accessId;
        this.accessUserId = accessUserId;
        this.sessionInformationId = sessionInformationId;
        this.sessionInformationUserId = sessionInformationUserId;
        this.entryTimeStamp = new Date();
        this.terminationDateTime = new Date();
        this.localSyncTime = new Date();
    }
}


/***/ }),

/***/ "./src/DataStructures/ConnectionBinaryTree/ConnectionBinaryTree.ts":
/*!*************************************************************************!*\
  !*** ./src/DataStructures/ConnectionBinaryTree/ConnectionBinaryTree.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_86961__) => {

__nested_webpack_require_86961__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_86961__.d(__nested_webpack_exports__, {
/* harmony export */   ConnectionBinaryTree: () => (/* binding */ ConnectionBinaryTree)
/* harmony export */ });
/* harmony import */ var _IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_86961__(/*! ../IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _ConnectionNode__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_86961__(/*! ./ConnectionNode */ "./src/DataStructures/ConnectionBinaryTree/ConnectionNode.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class ConnectionBinaryTree {
    static addNodeToTree(node) {
        if (this.connectionroot == null) {
            this.connectionroot = node;
            return this.connectionroot;
        }
        else {
            this.connectionroot = this.connectionroot.addNode(node, this.connectionroot, this.connectionroot.height);
        }
    }
    static addConnectionToTree(connection) {
        var node = new _ConnectionNode__WEBPACK_IMPORTED_MODULE_1__.ConnectionNode(connection.id, connection, null, null);
        this.addNodeToTree(node);
    }
    static waitForDataToLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (_IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__.IdentifierFlags.isConnectionLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(ConnectionBinaryTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static removeNodeFromTree(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.connectionroot) {
                this.connectionroot = this.connectionroot.removeNode(this.connectionroot, id);
            }
        });
    }
    static getNodeFromTree(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return null;
            }
            if (this.connectionroot) {
                var Node = this.connectionroot.getFromNode(id, this.connectionroot);
                return Node;
            }
            return this.connectionroot;
        });
    }
}
ConnectionBinaryTree.connectionroot = null;


/***/ }),

/***/ "./src/DataStructures/ConnectionBinaryTree/ConnectionNode.ts":
/*!*******************************************************************!*\
  !*** ./src/DataStructures/ConnectionBinaryTree/ConnectionNode.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_90552__) => {

__nested_webpack_require_90552__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_90552__.d(__nested_webpack_exports__, {
/* harmony export */   ConnectionNode: () => (/* binding */ ConnectionNode)
/* harmony export */ });
class ConnectionNode {
    constructor(key, value, leftNode, rightNode) {
        this.variants = [];
        this.height = 1;
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
        this.currentNode = null;
    }
    addCurrentNode(passedNode, node) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        if (passedNode.value.typeId != node.value.typeId) {
            node.currentNode = this.addCurrentNode(passedNode, node.currentNode);
        }
        return node;
    }
    addCurrentNodeType(passedNode, node) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        var contains = false;
        for (let i = 0; i < node.variants.length; i++) {
            if (node.variants[i].value.id == passedNode.value.id) {
                contains = true;
            }
        }
        if (!contains) {
            node.variants.push(passedNode);
        }
        //node.currentNode = this.addCurrentNode(passedNode, node.currentNode);
        return node;
    }
    addNode(passedNode, node, height) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        var LeftNode = node.leftNode;
        var RightNode = node.rightNode;
        if (node.key > passedNode.key) {
            node.leftNode = this.addNode(passedNode, LeftNode, height);
        }
        else if (node.key < passedNode.key) {
            node.rightNode = this.addNode(passedNode, RightNode, height);
        }
        // else if (node.key == passedNode.key && node.key != ""){
        //     node.currentNode = passedNode;
        // }
        else {
            return node;
        }
        node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
        let balancingFactor = this.getBalanceFactor(node);
        if (balancingFactor > 1) {
            if (node.leftNode) {
                if (passedNode.key < node.leftNode.key) {
                    return this.rightRotate(node);
                }
                else if (passedNode.key > node.leftNode.key) {
                    node.leftNode = this.leftRotate(node.leftNode);
                    return this.rightRotate(node);
                }
            }
        }
        if (balancingFactor < -1) {
            if (node.rightNode) {
                if (passedNode.key > node.rightNode.key) {
                    return this.leftRotate(node);
                }
                else if (passedNode.key < node.rightNode.key) {
                    node.rightNode = this.rightRotate(node.rightNode);
                    return this.leftRotate(node);
                }
            }
        }
        return node;
    }
    addTypeNode(passedNode, node, height) {
        var debugFlag = false;
        if (passedNode.value.typeId != 0) {
            // if(passedNode.value.characterValue == "Default"){
            //     console.log("default here");
            //     debugFlag = true;
            // }
            if (node == null) {
                if (debugFlag) {
                    console.log("equal here", node);
                }
                node = passedNode;
                return node;
            }
            var LeftNode = node.leftNode;
            var RightNode = node.rightNode;
            if (node.key > passedNode.key) {
                if (debugFlag) {
                    console.log("left  here", node);
                }
                node.leftNode = this.addTypeNode(passedNode, LeftNode, height);
            }
            else if (node.key < passedNode.key) {
                if (debugFlag) {
                    console.log("right here", node, RightNode);
                }
                node.rightNode = this.addTypeNode(passedNode, RightNode, height);
            }
            else {
                if (debugFlag) {
                    console.log("else here", node, passedNode);
                }
                if (node.key == passedNode.key && node.key != 0) {
                    node.addCurrentNodeType(passedNode, node);
                }
                return node;
            }
            node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
            if (debugFlag) {
                console.log("height here", node.height);
            }
            let balancingFactor = this.getBalanceFactor(node);
            if (debugFlag) {
                console.log("balancingFactor here", balancingFactor);
            }
            if (balancingFactor > 1) {
                if (node.leftNode) {
                    if (passedNode.key < node.leftNode.key) {
                        var returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 1 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key > node.leftNode.key) {
                        node.leftNode = this.leftRotate(node.leftNode);
                        var returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 2 ", returner);
                        }
                        return returner;
                    }
                }
            }
            if (balancingFactor < -1) {
                if (node.rightNode) {
                    if (passedNode.key > node.rightNode.key) {
                        var returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here 3 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key < node.rightNode.key) {
                        node.rightNode = this.rightRotate(node.rightNode);
                        var returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here4 ", returner, node);
                        }
                        return returner;
                    }
                }
            }
        }
        else {
            if (debugFlag) {
                console.log("what here", node);
            }
        }
        if (debugFlag) {
            console.log("returning here 6", node);
        }
        return node;
    }
    rightRotate(y) {
        if (y) {
            let x = y.leftNode;
            if (x) {
                let T2 = x.rightNode;
                y.leftNode = T2;
                x.rightNode = y;
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(y.rightNode)) + 1;
                x.height = Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode)) + 1;
                return x;
            }
            // return x;
        }
        return y;
    }
    leftRotate(x) {
        if (x) {
            let y = x.rightNode;
            if (y) {
                let T2 = y.leftNode;
                y.leftNode = x;
                x.rightNode = T2;
                x.height = Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode) + 1);
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(x.rightNode) + 1);
                return y;
            }
            //return y;
        }
        return x;
    }
    getHeight(node) {
        if (node) {
            return node.height;
        }
        return 0;
    }
    getBalanceFactor(N) {
        if (N == null) {
            return 0;
        }
        return this.getHeight(N.leftNode) - this.getHeight(N.rightNode);
    }
    getFromNode(id, node) {
        if (node) {
            if (id == node.key) {
                return node;
            }
            else if (id < node.key) {
                return this.getFromNode(id, node.leftNode);
            }
            else if (id > node.key) {
                return this.getFromNode(id, node.rightNode);
            }
            return node;
        }
        return node;
    }
    getCharacterFromNode(value, node) {
        if (node) {
            if (value == node.key) {
                return node;
            }
            else if (value < node.key) {
                return this.getCharacterFromNode(value, node.leftNode);
            }
            else if (value > node.key) {
                return this.getCharacterFromNode(value, node.rightNode);
            }
            return node;
        }
        return node;
    }
    removeNode(passedNode, id) {
        if (passedNode == null) {
            return passedNode;
        }
        if (passedNode.key > id) {
            passedNode.leftNode = this.removeNode(passedNode.leftNode, id);
            return passedNode;
        }
        else if (passedNode.key < id) {
            passedNode.rightNode = this.removeNode(passedNode.rightNode, id);
            return passedNode;
        }
        // if(passedNode.variants.length > 0){
        //     if(passedNode.value.id == id ){
        //     }
        //     var newNode = passedNode.variants[0];
        //     if(newNode){
        //         passedNode.value = newNode.value;
        //         passedNode.key = newNode.key;
        //         passedNode.currentNode = newNode.currentNode;
        //         return passedNode;
        //     }
        // }
        if (passedNode.leftNode == null) {
            let temp = passedNode.rightNode;
            passedNode = null;
            return temp;
        }
        else if (passedNode.rightNode == null) {
            let temp = passedNode.leftNode;
            passedNode = null;
            return temp;
        }
        else {
            // passing the rightNode to the inOrderSuccessor gives the immediate successor of the node
            var immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.variants = immediateSuccessor.variants;
            passedNode.currentNode = immediateSuccessor.currentNode;
            passedNode.rightNode = this.removeNode(passedNode.rightNode, immediateSuccessor.key);
            return passedNode;
        }
    }
    removeNodeWithVariants(passedNode, typeIdentifier, conceptId) {
        if (passedNode == null) {
            return passedNode;
        }
        if (passedNode.key > typeIdentifier) {
            passedNode.leftNode = this.removeNodeWithVariants(passedNode.leftNode, typeIdentifier, conceptId);
            return passedNode;
        }
        else if (passedNode.key < typeIdentifier) {
            passedNode.rightNode = this.removeNodeWithVariants(passedNode.rightNode, typeIdentifier, conceptId);
            return passedNode;
        }
        if (passedNode.variants.length > 0) {
            //condition if the main node is equal to the value
            if (passedNode.value.id == conceptId) {
                var newNode = passedNode.variants[0];
                if (newNode) {
                    passedNode.value = newNode.value;
                    passedNode.key = newNode.key;
                    passedNode.currentNode = newNode.currentNode;
                    passedNode.variants.splice(0, 1);
                    return passedNode;
                }
            }
            else {
                // in the condition that the main node is not equal to the checking value 
                for (let i = 0; i < passedNode.variants.length; i++) {
                    if (conceptId == passedNode.variants[i].value.id) {
                        passedNode.variants.splice(i, 1);
                        return passedNode;
                    }
                }
            }
        }
        if (passedNode.leftNode == null) {
            let temp = passedNode.rightNode;
            passedNode = null;
            return temp;
        }
        else if (passedNode.rightNode == null) {
            let temp = passedNode.leftNode;
            passedNode = null;
            return temp;
        }
        else {
            // passing the rightNode to the inOrderSuccessor gives the immediate successor of the node
            var immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.variants = immediateSuccessor.variants;
            passedNode.currentNode = immediateSuccessor.currentNode;
            passedNode.rightNode = this.removeNodeWithVariants(passedNode.rightNode, immediateSuccessor.key, conceptId);
            return passedNode;
        }
    }
    inOrderSuccessor(root) {
        while (root.leftNode != null) {
            root = root.leftNode;
        }
        return root;
    }
}


/***/ }),

/***/ "./src/DataStructures/ConnectionBinaryTree/ConnectionTypeTree.ts":
/*!***********************************************************************!*\
  !*** ./src/DataStructures/ConnectionBinaryTree/ConnectionTypeTree.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_104120__) => {

__nested_webpack_require_104120__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_104120__.d(__nested_webpack_exports__, {
/* harmony export */   ConnectionTypeTree: () => (/* binding */ ConnectionTypeTree)
/* harmony export */ });
/* harmony import */ var _IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_104120__(/*! ../IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _ConnectionNode__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_104120__(/*! ./ConnectionNode */ "./src/DataStructures/ConnectionBinaryTree/ConnectionNode.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class ConnectionTypeTree {
    static addNodeToTree(node) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.connectionTypeRoot == null) {
                this.connectionTypeRoot = node;
                return this.connectionTypeRoot;
            }
            else {
                this.connectionTypeRoot = this.connectionTypeRoot.addTypeNode(node, this.connectionTypeRoot, this.connectionTypeRoot.height);
            }
            return this.connectionTypeRoot;
        });
    }
    static waitForDataToLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (_IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__.IdentifierFlags.isConnectionTypeLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(ConnectionTypeTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static addConnectionToTree(connection) {
        if (connection.typeId != 0) {
            var node = new _ConnectionNode__WEBPACK_IMPORTED_MODULE_1__.ConnectionNode(connection.typeId, connection, null, null);
            this.addNodeToTree(node);
        }
    }
    static removeTypeConcept(typeId, id) {
        if (this.connectionTypeRoot) {
            this.connectionTypeRoot = this.connectionTypeRoot.removeNodeWithVariants(this.connectionTypeRoot, typeId, id);
        }
    }
    static getNodeFromTree(id) {
        if (this.connectionTypeRoot) {
            var Node = this.connectionTypeRoot.getFromNode(id, this.connectionTypeRoot);
            return Node;
        }
        return this.connectionTypeRoot;
    }
    static getTypeVariantsFromTree(typeId) {
        return __awaiter(this, void 0, void 0, function* () {
            var connection = [];
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return connection;
            }
            var Node = this.getNodeFromTree(typeId);
            if (Node) {
                connection.push(Node === null || Node === void 0 ? void 0 : Node.value);
                for (let i = 0; i < Node.variants.length; i++) {
                    connection.push(Node.variants[i].value);
                }
                return connection;
            }
        });
    }
    static getTypeVariantsFromTreeWithUserId(typeId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            var concepts = [];
            var Node = this.getNodeFromTree(typeId);
            if (Node) {
                if (Node.value.userId == userId) {
                    concepts.push(Node === null || Node === void 0 ? void 0 : Node.value);
                }
                for (let i = 0; i < Node.variants.length; i++) {
                    if (Node.variants[i].value.userId == userId) {
                        concepts.push(Node.variants[i].value);
                    }
                }
            }
            return concepts;
        });
    }
}
ConnectionTypeTree.connectionTypeRoot = null;


/***/ }),

/***/ "./src/DataStructures/ConnectionData.ts":
/*!**********************************************!*\
  !*** ./src/DataStructures/ConnectionData.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_108954__) => {

__nested_webpack_require_108954__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_108954__.d(__nested_webpack_exports__, {
/* harmony export */   ConnectionData: () => (/* binding */ ConnectionData)
/* harmony export */ });
/* harmony import */ var _Database_indexeddb__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_108954__(/*! ../Database/indexeddb */ "./src/Database/indexeddb.ts");
/* harmony import */ var _Connection__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_108954__(/*! ./Connection */ "./src/DataStructures/Connection.ts");
/* harmony import */ var _ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_108954__(/*! ./ConnectionBinaryTree/ConnectionBinaryTree */ "./src/DataStructures/ConnectionBinaryTree/ConnectionBinaryTree.ts");
/* harmony import */ var _ConnectionBinaryTree_ConnectionTypeTree__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_108954__(/*! ./ConnectionBinaryTree/ConnectionTypeTree */ "./src/DataStructures/ConnectionBinaryTree/ConnectionTypeTree.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class ConnectionData {
    constructor() {
        this.name = "Connection Array";
    }
    static CheckContains(connection) {
        var contains = false;
        for (var i = 0; i < this.connectionArray.length; i++) {
            if (this.connectionArray[i].id == connection.id) {
                contains = true;
            }
        }
        return contains;
    }
    static AddConnectionToStorage(connection) {
        (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_0__.storeToDatabase)("connection", connection);
    }
    static AddConnection(connection) {
        //    var contains = this.CheckContains(connection);
        //     if(contains){
        //         this.RemoveConnection(connection);
        //     }
        //     if(connection.id != 0 || connection.isTemp){
        //         storeToDatabase("connection",connection);
        //     }
        //     this.connectionArray.push(connection);
        (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_0__.storeToDatabase)("connection", connection);
        _ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_2__.ConnectionBinaryTree.addConnectionToTree(connection);
        _ConnectionBinaryTree_ConnectionTypeTree__WEBPACK_IMPORTED_MODULE_3__.ConnectionTypeTree.addConnectionToTree(connection);
    }
    static AddConnectionToMemory(connection) {
        _ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_2__.ConnectionBinaryTree.addConnectionToTree(connection);
        _ConnectionBinaryTree_ConnectionTypeTree__WEBPACK_IMPORTED_MODULE_3__.ConnectionTypeTree.addConnectionToTree(connection);
    }
    static AddToDictionary(connection) {
        this.connectionDictionary[connection.id] = connection;
    }
    static RemoveConnection(connection) {
        for (var i = 0; i < this.connectionArray.length; i++) {
            if (this.connectionArray[i].id == connection.id) {
                this.connectionArray.splice(i, 1);
            }
        }
        if (connection.id != 0) {
            (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_0__.removeFromDatabase)("connection", connection.id);
        }
    }
    static GetConnectionTree() {
        return _ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_2__.ConnectionBinaryTree.connectionroot;
    }
    static GetConnectionTypeTree() {
        return _ConnectionBinaryTree_ConnectionTypeTree__WEBPACK_IMPORTED_MODULE_3__.ConnectionTypeTree.connectionTypeRoot;
    }
    static GetConnection(id) {
        return __awaiter(this, void 0, void 0, function* () {
            //    var  myConcept: Connection|null;
            //    myConcept = null;
            //     for(var i=0; i<this.connectionArray.length; i++){
            //         if(this.connectionArray[i].id == id){
            //             myConcept = this.connectionArray[i];
            //         }
            //     }
            //     return myConcept;
            var myConnection = new _Connection__WEBPACK_IMPORTED_MODULE_1__.Connection(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            var node = yield _ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_2__.ConnectionBinaryTree.getNodeFromTree(id);
            if (node === null || node === void 0 ? void 0 : node.value) {
                var returnedConcept = node.value;
                if (returnedConcept) {
                    myConnection = returnedConcept;
                }
            }
            // if(myConcept.id == 0 || myConcept == null){
            //     for(var i=0; i<this.conceptsArray.length; i++){
            //         if(this.conceptsArray[i].id == id){
            //             myConcept = this.conceptsArray[i];
            //         }
            //     }
            // }
            return myConnection;
        });
    }
    static GetConnectionsOfCompositionLocal(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var connections = [];
            var node = yield _ConnectionBinaryTree_ConnectionTypeTree__WEBPACK_IMPORTED_MODULE_3__.ConnectionTypeTree.getNodeFromTree(id);
            if (node === null || node === void 0 ? void 0 : node.value) {
                var returnedConnection = node.value;
                if (returnedConnection) {
                    let myConnection = returnedConnection;
                    connections.push(myConnection);
                    for (let i = 0; i < node.variants.length; i++) {
                        connections.push(node.variants[i].value);
                    }
                }
            }
            // if(myConcept.id == 0 || myConcept == null){
            //     for(var i=0; i<this.conceptsArray.length; i++){
            //         if(this.conceptsArray[i].id == id){
            //             myConcept = this.conceptsArray[i];
            //         }
            //     }
            // }
            return connections;
        });
    }
    getName() {
        return this.name;
    }
}
ConnectionData.connectionArray = [];
ConnectionData.connectionDictionary = [];


/***/ }),

/***/ "./src/DataStructures/IdentifierFlags.ts":
/*!***********************************************!*\
  !*** ./src/DataStructures/IdentifierFlags.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_115988__) => {

__nested_webpack_require_115988__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_115988__.d(__nested_webpack_exports__, {
/* harmony export */   IdentifierFlags: () => (/* binding */ IdentifierFlags)
/* harmony export */ });
class IdentifierFlags {
}
IdentifierFlags.isTypeLoaded = false;
IdentifierFlags.isCharacterLoaded = false;
IdentifierFlags.isDataLoaded = false;
IdentifierFlags.isLocalDataLoaded = false;
IdentifierFlags.isLocalCharacterLoaded = false;
IdentifierFlags.isLocalTypeLoaded = false;
IdentifierFlags.isConnectionLoaded = false;
IdentifierFlags.isConnectionTypeLoaded = false;
IdentifierFlags.isLocalConnectionLoaded = false;


/***/ }),

/***/ "./src/DataStructures/Local/LocalBinaryCharacterTree.ts":
/*!**************************************************************!*\
  !*** ./src/DataStructures/Local/LocalBinaryCharacterTree.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_116982__) => {

__nested_webpack_require_116982__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_116982__.d(__nested_webpack_exports__, {
/* harmony export */   LocalBinaryCharacterTree: () => (/* binding */ LocalBinaryCharacterTree)
/* harmony export */ });
/* harmony import */ var _IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_116982__(/*! ./../IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_116982__(/*! ./../Node */ "./src/DataStructures/Node.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class LocalBinaryCharacterTree {
    static waitForDataToLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (_IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__.IdentifierFlags.isLocalCharacterLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(LocalBinaryCharacterTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static addNodeToTree(node) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.LocalCharacterRoot == null) {
                this.LocalCharacterRoot = node;
                return this.LocalCharacterRoot;
            }
            else {
                this.LocalCharacterRoot = this.LocalCharacterRoot.addCharacterNode(node, this.LocalCharacterRoot, this.LocalCharacterRoot.height);
            }
            return this.LocalCharacterRoot;
        });
    }
    static addConceptToTree(concept) {
        if (concept.characterValue != "") {
            var node = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(concept.characterValue, concept, null, null);
            this.addNodeToTree(node);
        }
    }
    static getNodeFromTree(value) {
        if (this.LocalCharacterRoot) {
            var Node = this.LocalCharacterRoot.getCharacterFromNode(value, this.LocalCharacterRoot);
            return Node;
        }
        return this.LocalCharacterRoot;
    }
    static getCharacterAndTypeFromTree(value, typeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return null;
            }
            if (this.LocalCharacterRoot) {
                var Node = this.LocalCharacterRoot.getFromNodeWithCharacterAndType(value, typeId, this.LocalCharacterRoot);
                return Node;
            }
            return this.LocalCharacterRoot;
        });
    }
    static removeConceptType(character, id) {
        if (this.LocalCharacterRoot) {
            this.LocalCharacterRoot = this.LocalCharacterRoot.removeNodeWithVariants(this.LocalCharacterRoot, character, id);
        }
    }
}
LocalBinaryCharacterTree.LocalCharacterRoot = null;


/***/ }),

/***/ "./src/DataStructures/Local/LocalBinaryTree.ts":
/*!*****************************************************!*\
  !*** ./src/DataStructures/Local/LocalBinaryTree.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_121014__) => {

__nested_webpack_require_121014__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_121014__.d(__nested_webpack_exports__, {
/* harmony export */   LocalBinaryTree: () => (/* binding */ LocalBinaryTree)
/* harmony export */ });
/* harmony import */ var _IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_121014__(/*! ../IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_121014__(/*! ./../Node */ "./src/DataStructures/Node.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class LocalBinaryTree {
    static addNodeToTree(node) {
        if (this.root == null) {
            this.root = node;
            return this.root;
        }
        else {
            this.root = this.root.addNode(node, this.root, this.root.height);
        }
    }
    static addConceptToTree(concept) {
        var node = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(concept.id, concept, null, null);
        var characterNode = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(concept.characterValue, concept, null, null);
        this.addNodeToTree(node);
    }
    static waitForDataToLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (_IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__.IdentifierFlags.isLocalDataLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(LocalBinaryTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static getNodeFromTree(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return null;
            }
            if (this.root) {
                var Node = this.root.getFromNode(id, this.root);
                return Node;
            }
            return null;
        });
    }
    static getCharacterAndTypeFromTree(value, typeId) {
        if (this.root) {
            var Node = this.root.getFromNodeWithCharacterAndType(value, typeId, this.root);
            return Node;
        }
        return this.root;
    }
    static removeNodeFromTree(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.root) {
                this.root = this.root.removeNode(this.root, id);
            }
        });
    }
}
LocalBinaryTree.root = null;


/***/ }),

/***/ "./src/DataStructures/Local/LocalBinaryTypeTree.ts":
/*!*********************************************************!*\
  !*** ./src/DataStructures/Local/LocalBinaryTypeTree.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_124652__) => {

__nested_webpack_require_124652__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_124652__.d(__nested_webpack_exports__, {
/* harmony export */   LocalBinaryTypeTree: () => (/* binding */ LocalBinaryTypeTree)
/* harmony export */ });
/* harmony import */ var _IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_124652__(/*! ./../IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_124652__(/*! ./../Node */ "./src/DataStructures/Node.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class LocalBinaryTypeTree {
    static addNodeToTree(node) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.LocalTypeRoot == null) {
                this.LocalTypeRoot = node;
                return this.LocalTypeRoot;
            }
            else {
                this.LocalTypeRoot = this.LocalTypeRoot.addTypeNode(node, this.LocalTypeRoot, this.LocalTypeRoot.height);
            }
            return this.LocalTypeRoot;
        });
    }
    static addConceptToTree(concept) {
        if (concept.typeId != 0) {
            var node = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(concept.typeId, concept, null, null);
            this.addNodeToTree(node);
        }
    }
    static removeConceptType(typeId, id) {
        if (this.LocalTypeRoot) {
            this.LocalTypeRoot = this.LocalTypeRoot.removeNodeWithVariants(this.LocalTypeRoot, typeId, id);
        }
    }
    static getNodeFromTree(id) {
        if (this.LocalTypeRoot) {
            var Node = this.LocalTypeRoot.getFromNode(id, this.LocalTypeRoot);
            return Node;
        }
        return this.LocalTypeRoot;
    }
    static getTypeVariantsFromTree(typeId) {
        var Node = this.getNodeFromTree(typeId);
        var concepts = [];
        if (Node) {
            concepts.push(Node === null || Node === void 0 ? void 0 : Node.value);
            for (let i = 0; i < Node.variants.length; i++) {
                concepts.push(Node.variants[i].value);
            }
            return concepts;
        }
    }
    static waitForDataToLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (_IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__.IdentifierFlags.isLocalTypeLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(LocalBinaryTypeTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static getTypeVariantsFromTreeWithUserId(typeId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            var concepts = [];
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return concepts;
            }
            var Node = this.getNodeFromTree(typeId);
            if (Node) {
                if (Node.value.userId == userId) {
                    concepts.push(Node === null || Node === void 0 ? void 0 : Node.value);
                }
                for (let i = 0; i < Node.variants.length; i++) {
                    if (Node.variants[i].value.userId == userId) {
                        concepts.push(Node.variants[i].value);
                    }
                }
            }
            return concepts;
        });
    }
}
LocalBinaryTypeTree.LocalTypeRoot = null;


/***/ }),

/***/ "./src/DataStructures/Local/LocalConceptData.ts":
/*!******************************************************!*\
  !*** ./src/DataStructures/Local/LocalConceptData.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_129232__) => {

__nested_webpack_require_129232__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_129232__.d(__nested_webpack_exports__, {
/* harmony export */   LocalConceptsData: () => (/* binding */ LocalConceptsData)
/* harmony export */ });
/* harmony import */ var _Concept__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_129232__(/*! ./../Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _Database_indexdblocal__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_129232__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
/* harmony import */ var _LocalBinaryTree__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_129232__(/*! ./LocalBinaryTree */ "./src/DataStructures/Local/LocalBinaryTree.ts");
/* harmony import */ var _LocalBinaryCharacterTree__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_129232__(/*! ./LocalBinaryCharacterTree */ "./src/DataStructures/Local/LocalBinaryCharacterTree.ts");
/* harmony import */ var _LocalBinaryTypeTree__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_129232__(/*! ./LocalBinaryTypeTree */ "./src/DataStructures/Local/LocalBinaryTypeTree.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class LocalConceptsData {
    constructor() {
        this.name = "conceptsArray";
    }
    static AddConcept(concept) {
        if (concept.id > 0) {
            (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_1__.storeToDatabase)("localconcept", concept);
            _LocalBinaryTree__WEBPACK_IMPORTED_MODULE_2__.LocalBinaryTree.addConceptToTree(concept);
            _LocalBinaryCharacterTree__WEBPACK_IMPORTED_MODULE_3__.LocalBinaryCharacterTree.addConceptToTree(concept);
            _LocalBinaryTypeTree__WEBPACK_IMPORTED_MODULE_4__.LocalBinaryTypeTree.addConceptToTree(concept);
            this.localconceptsArray.push(concept);
        }
    }
    static AddConceptToMemory(concept) {
        if (concept.id > 0) {
            _LocalBinaryTree__WEBPACK_IMPORTED_MODULE_2__.LocalBinaryTree.addConceptToTree(concept);
            _LocalBinaryCharacterTree__WEBPACK_IMPORTED_MODULE_3__.LocalBinaryCharacterTree.addConceptToTree(concept);
            _LocalBinaryTypeTree__WEBPACK_IMPORTED_MODULE_4__.LocalBinaryTypeTree.addConceptToTree(concept);
        }
    }
    static GetConcept(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var myConcept = new _Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
            var node = yield _LocalBinaryTree__WEBPACK_IMPORTED_MODULE_2__.LocalBinaryTree.getNodeFromTree(id);
            if (node === null || node === void 0 ? void 0 : node.value) {
                var returnedConcept = node.value;
                if (returnedConcept) {
                    myConcept = returnedConcept;
                }
            }
            return myConcept;
        });
    }
    static GetConceptByCharacter(characterValue) {
        return __awaiter(this, void 0, void 0, function* () {
            var concept = new _Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
            //  for(var i=0; i<this.conceptsArray.length; i++){
            //      if(this.conceptsArray[i].characterValue == characterValue){
            //         concept = this.conceptsArray[i];
            //      }
            //  }
            var Node = _LocalBinaryCharacterTree__WEBPACK_IMPORTED_MODULE_3__.LocalBinaryCharacterTree.getNodeFromTree(characterValue);
            if (Node) {
                concept = Node.value;
            }
            return concept;
        });
    }
    static GetConceptByCharacterAndTypeLocal(character_value, typeId) {
        return __awaiter(this, void 0, void 0, function* () {
            var concept = new _Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
            // let conceptList:Concept[] = await this.GetConceptsByTypeId(typeId);
            // for(var i=0;i<conceptList.length; i++){
            //     if(character_value == conceptList[i].characterValue){
            //         concept = conceptList[i];
            //     }
            // }
            var Node = yield _LocalBinaryCharacterTree__WEBPACK_IMPORTED_MODULE_3__.LocalBinaryCharacterTree.getCharacterAndTypeFromTree(character_value, typeId);
            if (Node) {
                concept = Node.value;
            }
            return concept;
        });
    }
    static GetConceptsByTypeId(typeId) {
        var myConcept;
        let ConceptList = [];
        myConcept = null;
        for (var i = 0; i < this.localconceptsArray.length; i++) {
            if (this.localconceptsArray[i].typeId == typeId) {
                ConceptList.push(this.localconceptsArray[i]);
            }
        }
        return ConceptList;
    }
    static GetConceptsByTypeIdAndUser(typeId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            var myConcept;
            let ConceptList = [];
            // myConcept = null;
            //  for(var i=0; i<this.conceptsArray.length; i++){
            //      if(this.conceptsArray[i].typeId == typeId && this.conceptsArray[i].userId == userId){
            //          ConceptList.push(this.conceptsArray[i]);
            //      }
            //  }
            ConceptList = yield _LocalBinaryTypeTree__WEBPACK_IMPORTED_MODULE_4__.LocalBinaryTypeTree.getTypeVariantsFromTreeWithUserId(typeId, userId);
            return ConceptList;
        });
    }
    getName() {
        return this.name;
    }
}
LocalConceptsData.localconceptsArray = [];


/***/ }),

/***/ "./src/DataStructures/Local/LocalConnectionData.ts":
/*!*********************************************************!*\
  !*** ./src/DataStructures/Local/LocalConnectionData.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_135783__) => {

__nested_webpack_require_135783__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_135783__.d(__nested_webpack_exports__, {
/* harmony export */   LocalConnectionData: () => (/* binding */ LocalConnectionData)
/* harmony export */ });
/* harmony import */ var _Database_indexdblocal__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_135783__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
/* harmony import */ var _IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_135783__(/*! ../IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class LocalConnectionData {
    constructor() {
        this.name = "Connection Array";
    }
    static CheckContains(connection) {
        var contains = false;
        for (var i = 0; i < this.connectionArray.length; i++) {
            if (this.connectionArray[i].id == connection.id) {
                contains = true;
            }
        }
        return contains;
    }
    static AddConnection(connection) {
        var contains = this.CheckContains(connection);
        if (contains) {
            this.RemoveConnection(connection);
        }
        if (connection.id != 0 || connection.isTemp) {
            (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_0__.storeToDatabase)("localconnection", connection);
        }
        this.connectionArray.push(connection);
    }
    static AddToDictionary(connection) {
        this.connectionDictionary[connection.id] = connection;
    }
    static RemoveConnection(connection) {
        for (var i = 0; i < this.connectionArray.length; i++) {
            if (this.connectionArray[i].id == connection.id) {
                this.connectionArray.splice(i, 1);
            }
        }
        if (connection.id != 0) {
            //  removeFromDatabase("connection",connection.id);
        }
    }
    static GetConnection(id) {
        var myConcept;
        myConcept = null;
        for (var i = 0; i < this.connectionArray.length; i++) {
            if (this.connectionArray[i].id == id) {
                myConcept = this.connectionArray[i];
            }
        }
        return myConcept;
    }
    static waitForDataToLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isLocalConnectionLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(LocalConnectionData.checkFlag, 1000, resolve);
        }
    }
    ;
    static GetConnectionsOfCompositionLocal(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var connectionList = [];
            try {
                var data = yield this.waitForDataToLoad();
                for (var i = 0; i < this.connectionArray.length; i++) {
                    if (this.connectionArray[i].typeId == id) {
                        connectionList.push(this.connectionArray[i]);
                    }
                }
                return connectionList;
            }
            catch (exception) {
                return connectionList;
            }
        });
    }
    getName() {
        return this.name;
    }
}
LocalConnectionData.connectionArray = [];
LocalConnectionData.connectionDictionary = [];


/***/ }),

/***/ "./src/DataStructures/Node.ts":
/*!************************************!*\
  !*** ./src/DataStructures/Node.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_140220__) => {

__nested_webpack_require_140220__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_140220__.d(__nested_webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node)
/* harmony export */ });
class Node {
    constructor(key, value, leftNode, rightNode) {
        this.variants = [];
        this.height = 1;
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
        this.currentNode = null;
    }
    addCurrentNode(passedNode, node) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        if (passedNode.value.typeId != node.value.typeId) {
            node.currentNode = this.addCurrentNode(passedNode, node.currentNode);
        }
        return node;
    }
    addCurrentNodeType(passedNode, node) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        var contains = false;
        for (let i = 0; i < node.variants.length; i++) {
            if (node.variants[i].value.id == passedNode.value.id) {
                contains = true;
            }
        }
        if (!contains) {
            node.variants.push(passedNode);
        }
        //node.currentNode = this.addCurrentNode(passedNode, node.currentNode);
        return node;
    }
    addNode(passedNode, node, height) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        var LeftNode = node.leftNode;
        var RightNode = node.rightNode;
        if (node.key > passedNode.key) {
            node.leftNode = this.addNode(passedNode, LeftNode, height);
        }
        else if (node.key < passedNode.key) {
            node.rightNode = this.addNode(passedNode, RightNode, height);
        }
        // else if (node.key == passedNode.key && node.key != ""){
        //     node.currentNode = passedNode;
        // }
        else {
            return node;
        }
        node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
        let balancingFactor = this.getBalanceFactor(node);
        if (balancingFactor > 1) {
            if (node.leftNode) {
                if (passedNode.key < node.leftNode.key) {
                    return this.rightRotate(node);
                }
                else if (passedNode.key > node.leftNode.key) {
                    node.leftNode = this.leftRotate(node.leftNode);
                    return this.rightRotate(node);
                }
            }
        }
        if (balancingFactor < -1) {
            if (node.rightNode) {
                if (passedNode.key > node.rightNode.key) {
                    return this.leftRotate(node);
                }
                else if (passedNode.key < node.rightNode.key) {
                    node.rightNode = this.rightRotate(node.rightNode);
                    return this.leftRotate(node);
                }
            }
        }
        return node;
    }
    addCharacterNode(passedNode, node, height) {
        var debugFlag = false;
        if (passedNode.value.characterValue != "") {
            // if(passedNode.value.characterValue == "Default"){
            //     console.log("default here");
            //     debugFlag = true;
            // }
            if (node == null) {
                if (debugFlag) {
                    console.log("equal here", node);
                }
                node = passedNode;
                return node;
            }
            // if (node.key == passedNode.key && node.key != "" ){
            //     if(passedNode.value.characterValue == "Default"){
            //         console.log("equal");
            //     }
            //     node.currentNode = passedNode;
            //     return node;
            // }
            var LeftNode = node.leftNode;
            var RightNode = node.rightNode;
            if (node.key > passedNode.key) {
                if (debugFlag) {
                    console.log("left  here", node);
                }
                node.leftNode = this.addCharacterNode(passedNode, LeftNode, height);
            }
            else if (node.key < passedNode.key) {
                if (debugFlag) {
                    console.log("right here", node, RightNode);
                }
                node.rightNode = this.addCharacterNode(passedNode, RightNode, height);
            }
            // else if (node.key == passedNode.key && node.key != ""){
            //     node.currentNode = passedNode;
            // }
            else {
                if (debugFlag) {
                    console.log("else here", node, passedNode);
                }
                if (node.key == passedNode.key && node.key != "" && node.value.id != passedNode.value.id) {
                    // node.currentNode = this.addCurrentNode(passedNode, node.currentNode);
                    node.addCurrentNodeType(passedNode, node);
                }
                return node;
            }
            node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
            if (debugFlag) {
                console.log("height here", node.height);
            }
            let balancingFactor = this.getBalanceFactor(node);
            if (debugFlag) {
                console.log("balancingFactor here", balancingFactor);
            }
            if (balancingFactor > 1) {
                if (node.leftNode) {
                    if (passedNode.key < node.leftNode.key) {
                        var returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 1 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key > node.leftNode.key) {
                        node.leftNode = this.leftRotate(node.leftNode);
                        var returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 2 ", returner);
                        }
                        return returner;
                    }
                }
            }
            if (balancingFactor < -1) {
                if (node.rightNode) {
                    if (passedNode.key > node.rightNode.key) {
                        var returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here 3 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key < node.rightNode.key) {
                        node.rightNode = this.rightRotate(node.rightNode);
                        var returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here4 ", returner, node);
                        }
                        return returner;
                    }
                }
            }
        }
        else {
            if (debugFlag) {
                console.log("what here", node);
            }
        }
        if (debugFlag) {
            console.log("returning here 6", node);
        }
        return node;
    }
    addTypeNode(passedNode, node, height) {
        var debugFlag = false;
        if (passedNode.value.typeId != 0) {
            // if(passedNode.value.characterValue == "Default"){
            //     console.log("default here");
            //     debugFlag = true;
            // }
            if (node == null) {
                if (debugFlag) {
                    console.log("equal here", node);
                }
                node = passedNode;
                return node;
            }
            var LeftNode = node.leftNode;
            var RightNode = node.rightNode;
            if (node.key > passedNode.key) {
                if (debugFlag) {
                    console.log("left  here", node);
                }
                node.leftNode = this.addTypeNode(passedNode, LeftNode, height);
            }
            else if (node.key < passedNode.key) {
                if (debugFlag) {
                    console.log("right here", node, RightNode);
                }
                node.rightNode = this.addTypeNode(passedNode, RightNode, height);
            }
            else {
                if (debugFlag) {
                    console.log("else here", node, passedNode);
                }
                if (node.key == passedNode.key && node.key != 0 && node.value.id != passedNode.value.id) {
                    node.addCurrentNodeType(passedNode, node);
                }
                return node;
            }
            node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
            if (debugFlag) {
                console.log("height here", node.height);
            }
            let balancingFactor = this.getBalanceFactor(node);
            if (debugFlag) {
                console.log("balancingFactor here", balancingFactor);
            }
            if (balancingFactor > 1) {
                if (node.leftNode) {
                    if (passedNode.key < node.leftNode.key) {
                        var returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 1 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key > node.leftNode.key) {
                        node.leftNode = this.leftRotate(node.leftNode);
                        var returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 2 ", returner);
                        }
                        return returner;
                    }
                }
            }
            if (balancingFactor < -1) {
                if (node.rightNode) {
                    if (passedNode.key > node.rightNode.key) {
                        var returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here 3 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key < node.rightNode.key) {
                        node.rightNode = this.rightRotate(node.rightNode);
                        var returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here4 ", returner, node);
                        }
                        return returner;
                    }
                }
            }
        }
        else {
            if (debugFlag) {
                console.log("what here", node);
            }
        }
        if (debugFlag) {
            console.log("returning here 6", node);
        }
        return node;
    }
    rightRotate(y) {
        if (y) {
            let x = y.leftNode;
            if (x) {
                let T2 = x.rightNode;
                y.leftNode = T2;
                x.rightNode = y;
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(y.rightNode)) + 1;
                x.height = Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode)) + 1;
                return x;
            }
            // return x;
        }
        return y;
    }
    leftRotate(x) {
        if (x) {
            let y = x.rightNode;
            if (y) {
                let T2 = y.leftNode;
                y.leftNode = x;
                x.rightNode = T2;
                x.height = Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode) + 1);
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(x.rightNode) + 1);
                return y;
            }
            //return y;
        }
        return x;
    }
    getHeight(node) {
        if (node) {
            return node.height;
        }
        return 0;
    }
    getBalanceFactor(N) {
        if (N == null) {
            return 0;
        }
        return this.getHeight(N.leftNode) - this.getHeight(N.rightNode);
    }
    getFromNode(id, node) {
        if (node) {
            if (id == node.key) {
                return node;
            }
            else if (id < node.key) {
                return this.getFromNode(id, node.leftNode);
            }
            else if (id > node.key) {
                return this.getFromNode(id, node.rightNode);
            }
            return node;
        }
        return node;
    }
    getCharacterFromNode(value, node) {
        if (node) {
            if (value == node.key) {
                return node;
            }
            else if (value < node.key) {
                return this.getCharacterFromNode(value, node.leftNode);
            }
            else if (value > node.key) {
                return this.getCharacterFromNode(value, node.rightNode);
            }
            return node;
        }
        return node;
    }
    getFromNodeWithCharacterAndType(value, typeId, node) {
        value = `${value}`;
        if (node) {
            if (value == node.key) {
                if (value == node.value.characterValue && typeId == node.value.typeId) {
                    return node;
                }
                else {
                    for (let i = 0; i < node.variants.length; i++) {
                        if (node.variants[i].value.typeId == typeId) {
                            return node.variants[i];
                        }
                    }
                    // return this.getFromNodeWithCharacterAndType(value, typeId, node.currentNode);
                }
            }
            else if (value < node.key) {
                return this.getFromNodeWithCharacterAndType(value, typeId, node.leftNode);
            }
            else if (value > node.key) {
                return this.getFromNodeWithCharacterAndType(value, typeId, node.rightNode);
            }
            return null;
        }
        return node;
    }
    removeNode(passedNode, id) {
        if (passedNode == null) {
            return passedNode;
        }
        if (passedNode.key > id) {
            passedNode.leftNode = this.removeNode(passedNode.leftNode, id);
            return passedNode;
        }
        else if (passedNode.key < id) {
            passedNode.rightNode = this.removeNode(passedNode.rightNode, id);
            return passedNode;
        }
        // if(passedNode.variants.length > 0){
        //     if(passedNode.value.id == id ){
        //     }
        //     var newNode = passedNode.variants[0];
        //     if(newNode){
        //         passedNode.value = newNode.value;
        //         passedNode.key = newNode.key;
        //         passedNode.currentNode = newNode.currentNode;
        //         return passedNode;
        //     }
        // }
        if (passedNode.leftNode == null) {
            let temp = passedNode.rightNode;
            passedNode = null;
            return temp;
        }
        else if (passedNode.rightNode == null) {
            let temp = passedNode.leftNode;
            passedNode = null;
            return temp;
        }
        else {
            // passing the rightNode to the inOrderSuccessor gives the immediate successor of the node
            var immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.variants = immediateSuccessor.variants;
            passedNode.currentNode = immediateSuccessor.currentNode;
            passedNode.rightNode = this.removeNode(passedNode.rightNode, immediateSuccessor.key);
            return passedNode;
        }
    }
    removeNodeWithVariants(passedNode, typeIdentifier, conceptId) {
        if (passedNode == null) {
            return passedNode;
        }
        if (passedNode.key > typeIdentifier) {
            passedNode.leftNode = this.removeNodeWithVariants(passedNode.leftNode, typeIdentifier, conceptId);
            return passedNode;
        }
        else if (passedNode.key < typeIdentifier) {
            passedNode.rightNode = this.removeNodeWithVariants(passedNode.rightNode, typeIdentifier, conceptId);
            return passedNode;
        }
        if (passedNode.variants.length > 0) {
            //condition if the main node is equal to the value
            if (passedNode.value.id == conceptId) {
                var newNode = passedNode.variants[0];
                if (newNode) {
                    passedNode.value = newNode.value;
                    passedNode.key = newNode.key;
                    passedNode.currentNode = newNode.currentNode;
                    passedNode.variants.splice(0, 1);
                    return passedNode;
                }
            }
            else {
                // in the condition that the main node is not equal to the checking value 
                for (let i = 0; i < passedNode.variants.length; i++) {
                    if (conceptId == passedNode.variants[i].value.id) {
                        passedNode.variants.splice(i, 1);
                        return passedNode;
                    }
                }
            }
        }
        if (passedNode.leftNode == null) {
            let temp = passedNode.rightNode;
            passedNode = null;
            return temp;
        }
        else if (passedNode.rightNode == null) {
            let temp = passedNode.leftNode;
            passedNode = null;
            return temp;
        }
        else {
            // passing the rightNode to the inOrderSuccessor gives the immediate successor of the node
            var immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.variants = immediateSuccessor.variants;
            passedNode.currentNode = immediateSuccessor.currentNode;
            passedNode.rightNode = this.removeNodeWithVariants(passedNode.rightNode, immediateSuccessor.key, conceptId);
            return passedNode;
        }
    }
    countNodeBelow(root) {
        if (root == null) {
            return 0;
        }
        //recursive call to left child and right child and
        // add the result of these with 1 ( 1 for counting the root)
        return 1 + this.countNodeBelow(root.leftNode) + this.countNodeBelow(root.rightNode);
    }
    inOrderSuccessor(root) {
        while (root.leftNode != null) {
            root = root.leftNode;
        }
        return root;
    }
}


/***/ }),

/***/ "./src/DataStructures/ReservedIds.ts":
/*!*******************************************!*\
  !*** ./src/DataStructures/ReservedIds.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_159354__) => {

__nested_webpack_require_159354__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_159354__.d(__nested_webpack_exports__, {
/* harmony export */   ReservedIds: () => (/* binding */ ReservedIds)
/* harmony export */ });
/* harmony import */ var _Api_GetReservedIds__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_159354__(/*! ../Api/GetReservedIds */ "./src/Api/GetReservedIds.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class ReservedIds {
    static getId() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.ids.length < 5) {
                var ids = yield (0,_Api_GetReservedIds__WEBPACK_IMPORTED_MODULE_0__.GetReservedIds)();
            }
            var id = this.ids[0];
            this.ids.shift();
            return id;
        });
    }
    static AddId(id) {
        if (!this.ids.includes(id)) {
            this.ids.push(id);
        }
    }
}
ReservedIds.ids = [];


/***/ }),

/***/ "./src/DataStructures/Returner.ts":
/*!****************************************!*\
  !*** ./src/DataStructures/Returner.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_161177__) => {

__nested_webpack_require_161177__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_161177__.d(__nested_webpack_exports__, {
/* harmony export */   Returner: () => (/* binding */ Returner)
/* harmony export */ });
class Returner {
    constructor(id, userId, referentId, isNew) {
        this.id = id;
        this.userId = userId;
        this.referentId = referentId;
        this.isNew = isNew;
    }
}


/***/ }),

/***/ "./src/DataStructures/SearchQuery.ts":
/*!*******************************************!*\
  !*** ./src/DataStructures/SearchQuery.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_161853__) => {

__nested_webpack_require_161853__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_161853__.d(__nested_webpack_exports__, {
/* harmony export */   SearchQuery: () => (/* binding */ SearchQuery)
/* harmony export */ });
class SearchQuery {
    constructor() {
        this.composition = 0;
        this.type = "";
        this.linker = "";
        this.inpage = 10;
        this.page = 1;
        this.listLinkers = [];
        this.textSearch = "";
        this.logic = "or";
        this.filterSearches = [];
        this.selectors = [];
    }
}


/***/ }),

/***/ "./src/DataStructures/SettingData.ts":
/*!*******************************************!*\
  !*** ./src/DataStructures/SettingData.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_162671__) => {

__nested_webpack_require_162671__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_162671__.d(__nested_webpack_exports__, {
/* harmony export */   SettingData: () => (/* binding */ SettingData)
/* harmony export */ });
class SettingData {
    constructor(isOnlineSync) {
        this.id = 1;
        this.isOnlineSync = false;
        this.isOnlineSync = isOnlineSync;
    }
}


/***/ }),

/***/ "./src/DataStructures/Settings.ts":
/*!****************************************!*\
  !*** ./src/DataStructures/Settings.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_163307__) => {

__nested_webpack_require_163307__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_163307__.d(__nested_webpack_exports__, {
/* harmony export */   Settings: () => (/* binding */ Settings)
/* harmony export */ });
class Settings {
}
Settings.isUpdated = false;
Settings.isOnlineSync = false;


/***/ }),

/***/ "./src/DataStructures/SyncData.ts":
/*!****************************************!*\
  !*** ./src/DataStructures/SyncData.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_163857__) => {

__nested_webpack_require_163857__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_163857__.d(__nested_webpack_exports__, {
/* harmony export */   SyncData: () => (/* binding */ SyncData)
/* harmony export */ });
/* harmony import */ var _Database_indexeddb__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_163857__(/*! ./../Database/indexeddb */ "./src/Database/indexeddb.ts");
/* harmony import */ var _Api_Create_CreateTheConceptApi__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_163857__(/*! ../Api/Create/CreateTheConceptApi */ "./src/Api/Create/CreateTheConceptApi.ts");
/* harmony import */ var _Api_Create_CreateTheConnectionApi__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_163857__(/*! ../Api/Create/CreateTheConnectionApi */ "./src/Api/Create/CreateTheConnectionApi.ts");
/* harmony import */ var _ConceptData__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_163857__(/*! ./ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _ConnectionData__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_163857__(/*! ./ConnectionData */ "./src/DataStructures/ConnectionData.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class SyncData {
    static CheckContains(concept) {
        var contains = false;
        for (var i = 0; i < this.conceptsSyncArray.length; i++) {
            if (this.conceptsSyncArray[i].id == concept.id) {
                contains = true;
            }
        }
        return contains;
    }
    static SyncDataDelete(id) {
        for (var i = 0; i < this.conceptsSyncArray.length; i++) {
            if (id == this.conceptsSyncArray[i].id) {
                console.log("this is the deleting of ", this.conceptsSyncArray[i]);
                this.conceptsSyncArray.splice(i, 1);
            }
        }
        for (var i = 0; i < this.connectionSyncArray.length; i++) {
            if (this.connectionSyncArray[i].ofTheConceptId == id || this.connectionSyncArray[i].toTheConceptId == id || this.connectionSyncArray[i].typeId == id) {
                this.connectionSyncArray.splice(i, 1);
            }
        }
    }
    static CheckContainsConnection(connection) {
        var contains = false;
        for (var i = 0; i < this.connectionSyncArray.length; i++) {
            if (this.connectionSyncArray[i].id == connection.id) {
                contains = true;
            }
        }
        return contains;
    }
    static AddConcept(concept) {
        var contains = false;
        // ConceptsData.AddConceptTemporary(concept);
        if (!contains) {
            this.conceptsSyncArray.push(concept);
        }
    }
    static RemoveConcept(concept) {
        for (var i = 0; i < this.conceptsSyncArray.length; i++) {
            if (this.conceptsSyncArray[i].id == concept.id) {
                this.conceptsSyncArray.splice(i, 1);
            }
        }
    }
    static AddConnection(connection) {
        this.connectionSyncArray.push(connection);
    }
    static RemoveConnection(connection) {
        for (var i = 0; i < this.connectionSyncArray.length; i++) {
            if (this.connectionSyncArray[i].id == connection.id) {
                this.connectionSyncArray.splice(i, 1);
            }
        }
    }
    static SyncDataOnline() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < this.conceptsSyncArray.length; i++) {
                _ConceptData__WEBPACK_IMPORTED_MODULE_3__.ConceptsData.AddConcept(this.conceptsSyncArray[i]);
            }
            for (let i = 0; i < this.connectionSyncArray.length; i++) {
                _ConnectionData__WEBPACK_IMPORTED_MODULE_4__.ConnectionData.AddConnection(this.connectionSyncArray[i]);
            }
            if (this.conceptsSyncArray.length > 0) {
                (0,_Api_Create_CreateTheConceptApi__WEBPACK_IMPORTED_MODULE_1__.CreateTheConceptApi)(this.conceptsSyncArray);
                this.conceptsSyncArray = [];
            }
            if (this.connectionSyncArray.length > 0) {
                (0,_Api_Create_CreateTheConnectionApi__WEBPACK_IMPORTED_MODULE_2__.CreateTheConnectionApi)(this.connectionSyncArray);
                this.connectionSyncArray = [];
            }
            return "done";
        });
    }
    static syncDataLocalDb() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.conceptsSyncArray.length > 0) {
                for (let i = 0; i < this.conceptsSyncArray.length; i++) {
                    (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_0__.storeToDatabase)("localconcept", this.conceptsSyncArray[i]);
                }
                this.conceptsSyncArray = [];
            }
            if (this.connectionSyncArray.length > 0) {
                for (let i = 0; i < this.connectionSyncArray.length; i++) {
                    (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_0__.storeToDatabase)("localconnection", this.connectionSyncArray[i]);
                }
                this.connectionSyncArray = [];
                console.log(this.connectionSyncArray);
            }
            return "done";
        });
    }
}
SyncData.conceptsSyncArray = [];
SyncData.connectionSyncArray = [];


/***/ }),

/***/ "./src/DataStructures/TheCharacter.ts":
/*!********************************************!*\
  !*** ./src/DataStructures/TheCharacter.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_169921__) => {

__nested_webpack_require_169921__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_169921__.d(__nested_webpack_exports__, {
/* harmony export */   TheCharacter: () => (/* binding */ TheCharacter)
/* harmony export */ });
class TheCharacter {
    constructor(userId, data, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId, entryTimestamp, isNew) {
        this.id = 0;
        this.isNew = false;
        this.userId = userId;
        this.data = `${data}`;
        this.securityId = securityId;
        this.securityUserId = securityUserId;
        this.accessId = accessId;
        this.accessUserId = accessUserId;
        this.sessionId = sessionId;
        this.sessionUserId = sessionUserId;
        this.isNew = isNew;
    }
}


/***/ }),

/***/ "./src/DataStructures/TheTexts.ts":
/*!****************************************!*\
  !*** ./src/DataStructures/TheTexts.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_170941__) => {

__nested_webpack_require_170941__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_170941__.d(__nested_webpack_exports__, {
/* harmony export */   TheTexts: () => (/* binding */ TheTexts)
/* harmony export */ });
class TheTexts {
    constructor(userId, data, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId, entryTimestamp, isNew) {
        this.id = 0;
        this.userId = userId;
        this.data = data;
        this.securityId = securityId;
        this.securityUserId = securityUserId;
        this.accessId = accessId;
        this.accessUserId = accessUserId;
        this.sessionId = sessionId;
        this.sessionUserId = sessionUserId;
        this.entryTimestamp = entryTimestamp;
        this.isNew = isNew;
    }
}


/***/ }),

/***/ "./src/Database/indexdblocal.ts":
/*!**************************************!*\
  !*** ./src/Database/indexdblocal.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_171954__) => {

__nested_webpack_require_171954__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_171954__.d(__nested_webpack_exports__, {
/* harmony export */   LocalIndexDb: () => (/* binding */ LocalIndexDb),
/* harmony export */   getAllFromLocalDb: () => (/* binding */ getAllFromLocalDb),
/* harmony export */   openDatabase: () => (/* binding */ openDatabase),
/* harmony export */   removeFromDatabase: () => (/* binding */ removeFromDatabase),
/* harmony export */   storeToDatabase: () => (/* binding */ storeToDatabase)
/* harmony export */ });
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var version = 4;
class LocalIndexDb {
}
function openDatabase(databaseName) {
    return new Promise(function (resolve, reject) {
        if (LocalIndexDb.db) {
            resolve(LocalIndexDb.db);
        }
        const request = indexedDB.open("FreeSchemaLocal", version);
        request.onerror = (event) => {
            console.error("Why didn't you allow my web app to use IndexedDB?!");
        };
        request.onsuccess = function (event) {
            var target = event.target;
            LocalIndexDb.db = target.result;
            resolve(LocalIndexDb.db);
        };
        request.onupgradeneeded = (event) => {
            var target = event.target;
            var db = target.result;
            var conceptDb = "localconcept";
            var connectionDb = "localconnection";
            if (!db.objectStoreNames.contains(conceptDb)) { // if there's no database name
                let objectStore = db.createObjectStore(conceptDb, { keyPath: 'id' }); // create it
                objectStore.transaction.oncomplete = (event) => {
                };
            }
            if (!db.objectStoreNames.contains(connectionDb)) { // if there's no database name
                let objectStore = db.createObjectStore(connectionDb, { keyPath: 'id' }); // create it
                objectStore.transaction.oncomplete = (event) => {
                };
            }
        };
    });
}
function storeToDatabase(databaseName, object) {
    openDatabase(databaseName);
    let db;
    const request = indexedDB.open("FreeSchemaLocal", version);
    request.onerror = (event) => {
        console.error("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = function (event) {
        var target = event.target;
        var db = target.result;
        let transaction = db.transaction(databaseName, "readwrite");
        let objStore = transaction.objectStore(databaseName);
        objStore.add(object);
    };
}
function getAllFromLocalDb(databaseName) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            var ConceptList = [];
            openDatabase(databaseName).then(db => {
                let transaction = LocalIndexDb.db.transaction(databaseName, "readwrite");
                let objectStore = transaction.objectStore(databaseName);
                var allobjects = objectStore.getAll();
                allobjects.onsuccess = () => {
                    const students = allobjects.result;
                    for (var i = 0; i < students.length; i++) {
                        ConceptList.push(students[i]);
                    }
                    resolve(ConceptList);
                };
            });
            //   // Database opened successfully
            // };
        });
        // return ConceptList;
    });
}
function removeFromDatabase(databaseName, id) {
    openDatabase(databaseName);
    const request = indexedDB.open("FreeSchemaLocal", version);
    request.onsuccess = function (event) {
        var target = event.target;
        var db = target.result;
        let transaction = db.transaction(databaseName, "readwrite");
        let objectStore = transaction.objectStore(databaseName);
        let getRequest = objectStore.delete(id);
        getRequest.onsuccess = function (event) {
            let target = event.target;
            // concept =  event.target.result;
            // Access the retrieved data
        };
    };
}


/***/ }),

/***/ "./src/Database/indexeddb.ts":
/*!***********************************!*\
  !*** ./src/Database/indexeddb.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_176926__) => {

__nested_webpack_require_176926__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_176926__.d(__nested_webpack_exports__, {
/* harmony export */   AiUpdateFlag: () => (/* binding */ AiUpdateFlag),
/* harmony export */   GetStatsFromDatabase: () => (/* binding */ GetStatsFromDatabase),
/* harmony export */   IndexDb: () => (/* binding */ IndexDb),
/* harmony export */   getFromDatabaseWithType: () => (/* binding */ getFromDatabaseWithType),
/* harmony export */   getFromDatabaseWithTypeOld: () => (/* binding */ getFromDatabaseWithTypeOld),
/* harmony export */   openDatabase: () => (/* binding */ openDatabase),
/* harmony export */   removeFromDatabase: () => (/* binding */ removeFromDatabase),
/* harmony export */   storeToDatabase: () => (/* binding */ storeToDatabase)
/* harmony export */ });
/* harmony import */ var _DataStructures_SettingData__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_176926__(/*! ../DataStructures/SettingData */ "./src/DataStructures/SettingData.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_176926__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


var version = 4;
class IndexDb {
}
function openDatabase(databaseName) {
    return new Promise(function (resolve, reject) {
        if (IndexDb.db) {
            resolve(IndexDb.db);
        }
        const request = indexedDB.open(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.BASE_URL + "_FreeSchema", version);
        request.onerror = (event) => {
            console.error("Why didn't you allow my web app to use IndexedDB?!");
        };
        request.onsuccess = function (event) {
            var target = event.target;
            IndexDb.db = target.result;
            resolve(IndexDb.db);
        };
        request.onupgradeneeded = (event) => {
            var target = event.target;
            var db = target.result;
            var conceptDb = "concept";
            var connectionDb = "connection";
            var settings = "settings";
            if (!db.objectStoreNames.contains(conceptDb)) { // if there's no database name
                let objectStore = db.createObjectStore(conceptDb, { keyPath: 'id' }); // create it
                objectStore.transaction.oncomplete = (event) => {
                    // Store values in the newly created objectStore.
                    // const myObjectStore = db
                    // .transaction(databaseName, "readwrite")
                    // .objectStore(databaseName);
                    // myObjectStore.add(object);
                };
            }
            if (!db.objectStoreNames.contains(connectionDb)) { // if there's no database name
                let objectStore = db.createObjectStore(connectionDb, { keyPath: 'id' }); // create it
                objectStore.transaction.oncomplete = (event) => {
                };
            }
            if (!db.objectStoreNames.contains(settings)) {
                let objectStore = db.createObjectStore(settings, { keyPath: 'id' }); // create it
                objectStore.transaction.oncomplete = (event) => {
                };
            }
        };
    });
}
function storeToDatabase(databaseName, object) {
    openDatabase(databaseName).then(() => {
        if (object.id != 0) {
            //var target = event.target as IDBOpenDBRequest;
            var db = IndexDb.db;
            let transaction = db.transaction(databaseName, "readwrite");
            let objStore = transaction.objectStore(databaseName);
            objStore.add(object);
        }
    });
    // request.onupgradeneeded = (event) => {
    //     var target = event.target as IDBOpenDBRequest;
    //     var db = target.result as IDBDatabase;
    //     var conceptDb = "concept";
    //     var connectionDb = "connection";
    //     var settings = "settings"
    //     if (!db.objectStoreNames.contains(conceptDb)) { // if there's no database name
    //       let  objectStore = db.createObjectStore(conceptDb, {keyPath: 'id'}); // create it
    //       objectStore.transaction.oncomplete = (event: Event) => {
    //             // Store values in the newly created objectStore.
    //             // const myObjectStore = db
    //             // .transaction(databaseName, "readwrite")
    //             // .objectStore(databaseName);
    //             // myObjectStore.add(object);
    //       }
    //     }
    //     if (!db.objectStoreNames.contains(connectionDb)) { // if there's no database name
    //       let  objectStore = db.createObjectStore(connectionDb, {keyPath: 'id'}); // create it
    //       objectStore.transaction.oncomplete = (event: Event) => {
    //       }
    //     }
    //     if(!db.objectStoreNames.contains(settings)){
    //       let  objectStore = db.createObjectStore(settings, {keyPath: 'id'}); // create it
    //       objectStore.transaction.oncomplete = (event: Event) => {
    //       }
    //     }
    // }
}
// export function getFromDatabase(databaseName:string, id:number){
//   openDatabase(databaseName).then(()=>{
//     let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
//     let objectStore =transaction.objectStore(databaseName) as IDBObjectStore;
//     let getRequest = objectStore.get(id);
//     getRequest.onsuccess = function(event:Event) {
//       let target = event.target as IDBRequest;
//       concept = target.result as Concept;
//       return concept;
//       // concept =  event.target.result;
//       // Access the retrieved data
//     };  
//      return concept as Concept;
//   });
//     //   // Database opened successfully
//     // };
//   }
function GetStatsFromDatabase() {
    return new Promise(function (resolve, reject) {
        var databaseName = "settings";
        openDatabase(databaseName).then(() => {
            var db = IndexDb.db;
            let transaction = db.transaction(databaseName, "readwrite");
            let objectStore = transaction.objectStore(databaseName);
            var allobjects = objectStore.getAll();
            allobjects.onsuccess = () => {
                var settingsData = new _DataStructures_SettingData__WEBPACK_IMPORTED_MODULE_0__.SettingData(false);
                var settingsArray = allobjects.result;
                for (let i = 0; i < settingsArray.length; i++) {
                    settingsData = settingsArray[i];
                    settingsData = settingsData;
                }
                resolve(settingsData);
            };
        });
    });
}
function AiUpdateFlag(object) {
    var databaseName = "settings";
    openDatabase(databaseName).then(() => {
        var db = IndexDb.db;
        let transaction = db.transaction(databaseName, "readwrite");
        let objStore = transaction.objectStore(databaseName);
        objStore.put(object);
    });
}
function getFromDatabaseWithType(databaseName, type, id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            openDatabase(databaseName);
            const request = indexedDB.open(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.BASE_URL + "_FreeSchema", version);
            var concept;
            var ConceptList = [];
            request.onsuccess = function (event) {
                var target = event.target;
                var db = target.result;
                let transaction = db.transaction(databaseName, "readwrite");
                let objectStore = transaction.objectStore(databaseName);
                const getCursorRequest = objectStore.openCursor();
                getCursorRequest.onsuccess = e => {
                    // Cursor logic here
                    let target = e.target;
                    let cursor = target.result;
                    if (cursor) {
                        if (cursor.value[type] == id) {
                            concept = cursor.value;
                            ConceptList.push(concept);
                        }
                        cursor.continue();
                    }
                };
                resolve(ConceptList);
                //   // Database opened successfully
                // };
            };
            request.onerror = function (event) {
                reject(event);
            };
        });
        // return ConceptList;
    });
}
function getFromDatabaseWithTypeOld(databaseName) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            openDatabase(databaseName).then(() => {
                var concept;
                var ConceptList = [];
                var db = IndexDb.db;
                let transaction = db.transaction(databaseName, "readwrite");
                let objectStore = transaction.objectStore(databaseName);
                var allobjects = objectStore.getAll();
                allobjects.onsuccess = () => {
                    const students = allobjects.result;
                    for (var i = 0; i < students.length; i++) {
                        ConceptList.push(students[i]);
                    }
                    resolve(ConceptList);
                };
            });
        });
        // return ConceptList;
    });
}
//   export async function getFromDatabaseWithCharacterOld(databaseName:string, type:string, characterValue:string){
//     return new Promise(function(resolve, reject){
//     openDatabase(databaseName);
//     const request = indexedDB.open("FreeSchema",version);
//     var concept: Concept|null;
//     request.onsuccess = function(event) {
//         var target = event.target as IDBOpenDBRequest;
//         var db = target.result as IDBDatabase;
//       let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
//       let objectStore =transaction.objectStore(databaseName) as IDBObjectStore;
//       var allobjects = objectStore.getAll();
//       allobjects.onsuccess = ()=> {
//         const students = allobjects.result;
//         for(var i=0; i<students.length; i++){
//           if(students[i].character_value == characterValue){
//             concept = students[i];
//           }
//         }
//         console.log("resolving");
//         resolve(concept); 
//     }
//     //   // Database opened successfully
//     // };
//     }
//     request.onerror =function(event){
//       reject(event);
//     }
// });
//    // return ConceptList;
//   }
function removeFromDatabase(databaseName, id) {
    openDatabase(databaseName);
    const request = indexedDB.open(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.BASE_URL + "_FreeSchema", version);
    request.onsuccess = function (event) {
        var target = event.target;
        var db = target.result;
        let transaction = db.transaction(databaseName, "readwrite");
        let objectStore = transaction.objectStore(databaseName);
        console.log("deleting from the database", id);
        let getRequest = objectStore.delete(Number(id));
        getRequest.onsuccess = function (event) {
            let target = event.target;
            console.log(event);
            console.log("deleted successfully");
            // concept =  event.target.result;
            // Access the retrieved data
        };
    };
}


/***/ }),

/***/ "./src/Services/CreateBinaryTreeFromData.ts":
/*!**************************************************!*\
  !*** ./src/Services/CreateBinaryTreeFromData.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_189239__) => {

__nested_webpack_require_189239__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_189239__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateBinaryTreeFromData)
/* harmony export */ });
/* harmony import */ var _Database_indexeddb__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_189239__(/*! ../Database/indexeddb */ "./src/Database/indexeddb.ts");
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_189239__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function CreateBinaryTreeFromData() {
    return __awaiter(this, void 0, void 0, function* () {
        var startTime = new Date().getTime();
        var conceptList = yield (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_0__.getFromDatabaseWithTypeOld)("concept");
        if (Array.isArray(conceptList)) {
            for (var i = 0; i < conceptList.length; i++) {
                let concept = conceptList[i];
                _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_1__.ConceptsData.AddConceptToMemory(concept);
                // let node = new Node(concept.id, concept, null, null);
                // BinaryTree.addNodeToTree(node);
            }
        }
        var endTime = new Date().getTime();
        var time = endTime - startTime;
    });
}


/***/ }),

/***/ "./src/Services/CreateConnectionBetweenTwoConcepts.ts":
/*!************************************************************!*\
  !*** ./src/Services/CreateConnectionBetweenTwoConcepts.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_191609__) => {

__nested_webpack_require_191609__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_191609__.d(__nested_webpack_exports__, {
/* harmony export */   CreateConnectionBetweenTwoConcepts: () => (/* binding */ CreateConnectionBetweenTwoConcepts)
/* harmony export */ });
/* harmony import */ var _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_191609__(/*! ../DataStructures/Connection */ "./src/DataStructures/Connection.ts");
/* harmony import */ var _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_191609__(/*! ../DataStructures/SyncData */ "./src/DataStructures/SyncData.ts");
/* harmony import */ var _MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_191609__(/*! ./MakeTheInstanceConcept */ "./src/Services/MakeTheInstanceConcept.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function CreateConnectionBetweenTwoConcepts(concept1Data, concept2Data, linker, both = false) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        var userId = concept1Data.userId;
        var orderUserId = userId;
        var securityId = 999;
        var securityUserId = userId;
        var accessId = 4;
        var accessUserId = userId;
        var sessionInformationId = 999;
        var sessionInformationUserId = 999;
        if (both) {
            let prefix1 = ((_a = concept1Data.type) === null || _a === void 0 ? void 0 : _a.characterValue) + "_s";
            let linkerAdd1 = linker + "_by";
            let backwardLinker = prefix1 + "_" + linkerAdd1;
            var connectionConceptReverse = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_2__["default"])("connection", backwardLinker, false, 999, 999, 999);
            var newConnection = new _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__.Connection(0, concept2Data.id, concept1Data.id, concept2Data.userId, concept1Data.userId, concept2Data.userId, connectionConceptReverse.id, connectionConceptReverse.userId, 1000, userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_1__.SyncData.AddConnection(newConnection);
        }
        let prefix = ((_b = concept1Data.type) === null || _b === void 0 ? void 0 : _b.characterValue) + "_s";
        let linkerAdd = linker + "_s";
        let forwardLinker = prefix + "_" + linkerAdd;
        var connectionConcept = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_2__["default"])("connection", forwardLinker, false, 999, 999, 999);
        var newConnection = new _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__.Connection(0, concept1Data.id, concept2Data.id, concept1Data.userId, concept2Data.userId, concept1Data.userId, connectionConcept.id, connectionConcept.userId, 1000, userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
        _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_1__.SyncData.AddConnection(newConnection);
    });
}


/***/ }),

/***/ "./src/Services/CreateTheComposition.ts":
/*!**********************************************!*\
  !*** ./src/Services/CreateTheComposition.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_195578__) => {

__nested_webpack_require_195578__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_195578__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateTheComposition)
/* harmony export */ });
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_195578__(/*! ../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _CreateTheConnection__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_195578__(/*! ./CreateTheConnection */ "./src/Services/CreateTheConnection.ts");
/* harmony import */ var _MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_195578__(/*! ./MakeTheInstanceConcept */ "./src/Services/MakeTheInstanceConcept.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function CreateTheComposition(json, ofTheConceptId = null, ofTheConceptUserId = null, mainKey = null, userId = null, accessId = null, sessionInformationId = null) {
    return __awaiter(this, void 0, void 0, function* () {
        var localUserId = userId !== null && userId !== void 0 ? userId : 10267;
        var localAccessId = accessId !== null && accessId !== void 0 ? accessId : 10267;
        var localSessionId = sessionInformationId !== null && sessionInformationId !== void 0 ? sessionInformationId : 10267;
        var MainKeyLocal = mainKey !== null && mainKey !== void 0 ? mainKey : 0;
        var MainConcept = new _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
        for (const key in json) {
            if (typeof json[key] != 'string' && typeof json[key] != 'number') {
                if (ofTheConceptId == null && ofTheConceptUserId == null) {
                    var localMainKey = MainKeyLocal;
                    let conceptString = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(key, "", true, localUserId, localAccessId, localSessionId);
                    var concept = conceptString;
                    MainConcept = concept;
                    localMainKey = concept.id;
                    MainKeyLocal = concept.id;
                    yield CreateTheComposition(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId);
                }
                else {
                    var ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                    var ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 10267;
                    var localMainKey = MainKeyLocal;
                    var conceptString = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(key, "", true, localUserId, localAccessId, localSessionId);
                    var concept = conceptString;
                    yield (0,_CreateTheConnection__WEBPACK_IMPORTED_MODULE_1__["default"])(ofThe, ofTheUser, concept.id, concept.userId, localMainKey, localSessionId, concept.userId);
                    yield CreateTheComposition(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId);
                }
            }
            else {
                var ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                var ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 10267;
                var localMainKey = MainKeyLocal;
                var conceptString = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(key, json[key], false, localUserId, localAccessId, localSessionId);
                var concept = conceptString;
                yield (0,_CreateTheConnection__WEBPACK_IMPORTED_MODULE_1__["default"])(ofThe, ofTheUser, concept.id, concept.userId, localMainKey, localSessionId, concept.userId);
            }
        }
        return MainConcept;
    });
}


/***/ }),

/***/ "./src/Services/CreateTheConcept.ts":
/*!******************************************!*\
  !*** ./src/Services/CreateTheConcept.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_200440__) => {

__nested_webpack_require_200440__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_200440__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateTheConcept)
/* harmony export */ });
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_200440__(/*! ../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _DataStructures_ReservedIds__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_200440__(/*! ../DataStructures/ReservedIds */ "./src/DataStructures/ReservedIds.ts");
/* harmony import */ var _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_200440__(/*! ../DataStructures/SyncData */ "./src/DataStructures/SyncData.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function CreateTheConcept(referent, userId, categoryId, categoryUserId, typeId, typeUserId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId) {
    return __awaiter(this, void 0, void 0, function* () {
        var id = yield _DataStructures_ReservedIds__WEBPACK_IMPORTED_MODULE_1__.ReservedIds.getId();
        var isNew = true;
        var concept = new _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(id, userId, typeId, typeUserId, categoryId, categoryUserId, referentId, referentUserId, referent, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, isNew);
        concept.isTemp = true;
        _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_2__.SyncData.AddConcept(concept);
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/CreateTheConnection.ts":
/*!*********************************************!*\
  !*** ./src/Services/CreateTheConnection.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_203014__) => {

__nested_webpack_require_203014__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_203014__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTheConnection)
/* harmony export */ });
/* harmony import */ var _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_203014__(/*! ../DataStructures/Connection */ "./src/DataStructures/Connection.ts");
/* harmony import */ var _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_203014__(/*! ../DataStructures/SyncData */ "./src/DataStructures/SyncData.ts");


function createTheConnection(ofTheConceptId, ofTheConceptUserId, toTheConceptId, toTheConceptUserId, typeId, sessionInformationId, sessionInformationUserId) {
    var orderId = 1;
    var orderUserId = ofTheConceptUserId;
    var typeUserId = ofTheConceptUserId;
    var userId = ofTheConceptUserId;
    var securityId = 0;
    var securityUserId = ofTheConceptUserId;
    var accessId = 4;
    var accessUserId = ofTheConceptUserId;
    if (ofTheConceptId != toTheConceptId) {
        var connection = new _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__.Connection(0, ofTheConceptId, toTheConceptId, ofTheConceptUserId, toTheConceptUserId, userId, typeId, typeUserId, orderId, orderUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
        connection.isTemp = true;
        connection.id = Math.floor(Math.random() * 100000000);
        _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_1__.SyncData.AddConnection(connection);
    }
}


/***/ }),

/***/ "./src/Services/DeleteConcept.ts":
/*!***************************************!*\
  !*** ./src/Services/DeleteConcept.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_204849__) => {

__nested_webpack_require_204849__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_204849__.d(__nested_webpack_exports__, {
/* harmony export */   DeleteConceptById: () => (/* binding */ DeleteConceptById)
/* harmony export */ });
/* harmony import */ var _Api_DeleteTheConcept__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_204849__(/*! ../Api/DeleteTheConcept */ "./src/Api/DeleteTheConcept.ts");
/* harmony import */ var _DataStructures_BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_204849__(/*! ../DataStructures/BinaryCharacterTree */ "./src/DataStructures/BinaryCharacterTree.ts");
/* harmony import */ var _DataStructures_BinaryTree__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_204849__(/*! ../DataStructures/BinaryTree */ "./src/DataStructures/BinaryTree.ts");
/* harmony import */ var _DataStructures_BinaryTypeTree__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_204849__(/*! ../DataStructures/BinaryTypeTree */ "./src/DataStructures/BinaryTypeTree.ts");
/* harmony import */ var _Database_indexeddb__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_204849__(/*! ../Database/indexeddb */ "./src/Database/indexeddb.ts");
/* harmony import */ var _GetTheConcept__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_204849__(/*! ./GetTheConcept */ "./src/Services/GetTheConcept.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






function DeleteConceptById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_5__["default"])(id);
        yield _DataStructures_BinaryTree__WEBPACK_IMPORTED_MODULE_2__.BinaryTree.removeNodeFromTree(id);
        var typeId = concept.typeId;
        var character = concept.characterValue;
        yield _DataStructures_BinaryTypeTree__WEBPACK_IMPORTED_MODULE_3__.BinaryTypeTree.removeTypeConcept(typeId, id);
        yield _DataStructures_BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_1__.BinaryCharacterTree.removeNodeByCharacter(character, id);
        (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_4__.removeFromDatabase)("concept", id);
        console.log("deleting the data", concept);
        (0,_Api_DeleteTheConcept__WEBPACK_IMPORTED_MODULE_0__["default"])(id);
    });
}


/***/ }),

/***/ "./src/Services/DeleteConnection.ts":
/*!******************************************!*\
  !*** ./src/Services/DeleteConnection.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_207953__) => {

__nested_webpack_require_207953__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_207953__.d(__nested_webpack_exports__, {
/* harmony export */   DeleteConnectionById: () => (/* binding */ DeleteConnectionById)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_207953__(/*! ../DataStructures/ConnectionBinaryTree/ConnectionBinaryTree */ "./src/DataStructures/ConnectionBinaryTree/ConnectionBinaryTree.ts");
/* harmony import */ var _DataStructures_ConnectionBinaryTree_ConnectionTypeTree__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_207953__(/*! ../DataStructures/ConnectionBinaryTree/ConnectionTypeTree */ "./src/DataStructures/ConnectionBinaryTree/ConnectionTypeTree.ts");
/* harmony import */ var _Database_indexeddb__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_207953__(/*! ../Database/indexeddb */ "./src/Database/indexeddb.ts");
/* harmony import */ var _GetConnections__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_207953__(/*! ./GetConnections */ "./src/Services/GetConnections.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function DeleteConnectionById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var connection = yield (0,_GetConnections__WEBPACK_IMPORTED_MODULE_3__.GetConnectionById)(id);
        (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_2__.removeFromDatabase)("connection", id);
        _DataStructures_ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_0__.ConnectionBinaryTree.removeNodeFromTree(id);
        _DataStructures_ConnectionBinaryTree_ConnectionTypeTree__WEBPACK_IMPORTED_MODULE_1__.ConnectionTypeTree.removeTypeConcept(connection.typeId, id);
    });
}


/***/ }),

/***/ "./src/Services/GetComposition.ts":
/*!****************************************!*\
  !*** ./src/Services/GetComposition.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_210590__) => {

__nested_webpack_require_210590__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_210590__.d(__nested_webpack_exports__, {
/* harmony export */   GetComposition: () => (/* binding */ GetComposition),
/* harmony export */   GetCompositionFromMemory: () => (/* binding */ GetCompositionFromMemory),
/* harmony export */   GetCompositionWithId: () => (/* binding */ GetCompositionWithId),
/* harmony export */   GetCompositionWithIdFromMemory: () => (/* binding */ GetCompositionWithIdFromMemory)
/* harmony export */ });
/* harmony import */ var _Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_210590__(/*! ../Api/GetConcept */ "./src/Api/GetConcept.ts");
/* harmony import */ var _Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_210590__(/*! ../Api/GetAllConnectionsOfComposition */ "./src/Api/GetAllConnectionsOfComposition.ts");
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_210590__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_210590__(/*! ../DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function GetComposition(id) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        var returnOutput = {};
        var connectionListString = yield (0,_Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_1__.GetAllConnectionsOfComposition)(id);
        connectionList = connectionListString;
        //connectionList = ConnectionData.GetConnectionsOfComposition(id);
        var compositionList = [];
        for (var i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        var concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            var conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        var output = yield recursiveFetch(id, connectionList, compositionList);
        var mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        return returnOutput;
    });
}
function GetCompositionFromMemory(id) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        var returnOutput = {};
        connectionList = yield _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_3__.ConnectionData.GetConnectionsOfCompositionLocal(id);
        //connectionList = ConnectionData.GetConnectionsOfComposition(id);
        var compositionList = [];
        for (var i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        var concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            var conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        var output = yield recursiveFetch(id, connectionList, compositionList);
        var mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        return returnOutput;
    });
}
function GetCompositionWithIdFromMemory(id) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        var returnOutput = {};
        connectionList = yield _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_3__.ConnectionData.GetConnectionsOfCompositionLocal(id);
        var compositionList = [];
        for (var i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        var concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            var conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        var output = yield recursiveFetch(id, connectionList, compositionList);
        var mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        var FinalReturn = {};
        FinalReturn['data'] = returnOutput;
        FinalReturn['id'] = id;
        return FinalReturn;
    });
}
function GetCompositionWithId(id) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        var returnOutput = {};
        var connectionListString = yield (0,_Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_1__.GetAllConnectionsOfComposition)(id);
        connectionList = connectionListString;
        var compositionList = [];
        for (var i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        var concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            var conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        var output = yield recursiveFetch(id, connectionList, compositionList);
        var mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        var FinalReturn = {};
        FinalReturn['data'] = returnOutput;
        FinalReturn['id'] = id;
        return FinalReturn;
    });
}
function recursiveFetch(id, connectionList, compositionList) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        var output = {};
        var arroutput = [];
        var concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if ((concept == null || concept.id == 0) && id != null && id != undefined) {
            var conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        if (concept) {
            if (concept.type == null) {
                var toConceptTypeId = concept.typeId;
                var toConceptType = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(toConceptTypeId);
                concept.type = toConceptType;
                if (toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined) {
                    var conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(toConceptTypeId);
                    toConceptType = conceptString;
                    concept.type = toConceptType;
                }
            }
        }
        var mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        if (!compositionList.includes(id)) {
            return concept === null || concept === void 0 ? void 0 : concept.characterValue;
        }
        else {
            for (var i = 0; i < connectionList.length; i++) {
                if (connectionList[i].ofTheConceptId == id) {
                    var toConceptId = connectionList[i].toTheConceptId;
                    var toConcept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(toConceptId);
                    if ((toConcept == null || toConcept.id == 0) && toConceptId != null && toConceptId != undefined) {
                        var conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(toConceptId);
                        toConcept = conceptString;
                    }
                    if (toConcept) {
                        if ((toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) == null) {
                            var toConceptTypeId = toConcept.typeId;
                            var toConceptType = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(toConceptTypeId);
                            toConcept.type = toConceptType;
                            if (toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined) {
                                var conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(toConceptTypeId);
                                toConceptType = conceptString;
                                toConcept.type = toConceptType;
                            }
                        }
                    }
                    var regex = "the_";
                    var localmainString = (_d = (_c = toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "";
                    var localKey = localmainString.replace(regex, "");
                    if (isNaN(Number(localKey))) {
                        if (localKey) {
                            const result = yield recursiveFetch(toConceptId, connectionList, compositionList);
                            output[localKey] = result;
                        }
                    }
                    else {
                        const result = yield recursiveFetch(toConceptId, connectionList, compositionList);
                        arroutput[localKey] = result;
                        output = arroutput;
                    }
                }
            }
        }
        return output;
    });
}


/***/ }),

/***/ "./src/Services/GetCompositionBulk.ts":
/*!********************************************!*\
  !*** ./src/Services/GetCompositionBulk.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_222418__) => {

__nested_webpack_require_222418__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_222418__.d(__nested_webpack_exports__, {
/* harmony export */   GetCompositionBulk: () => (/* binding */ GetCompositionBulk),
/* harmony export */   GetCompositionBulkWithDataId: () => (/* binding */ GetCompositionBulkWithDataId)
/* harmony export */ });
/* harmony import */ var _Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_222418__(/*! ../Api/GetAllConnectionsOfCompositionBulk */ "./src/Api/GetAllConnectionsOfCompositionBulk.ts");
/* harmony import */ var _GetComposition__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_222418__(/*! ./GetComposition */ "./src/Services/GetComposition.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetCompositionBulk(ids = []) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0,_Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_0__.GetAllConnectionsOfCompositionBulk)(ids);
        var compositions = [];
        for (let i = 0; i < ids.length; i++) {
            var comp = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_1__.GetCompositionFromMemory)(ids[i]);
            compositions.push(comp);
        }
        return compositions;
    });
}
function GetCompositionBulkWithDataId(ids = []) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0,_Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_0__.GetAllConnectionsOfCompositionBulk)(ids);
        var compositions = [];
        for (let i = 0; i < ids.length; i++) {
            var comp = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_1__.GetCompositionWithIdFromMemory)(ids[i]);
            compositions.push(comp);
        }
        return compositions;
    });
}


/***/ }),

/***/ "./src/Services/GetCompositionList.ts":
/*!********************************************!*\
  !*** ./src/Services/GetCompositionList.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_225114__) => {

__nested_webpack_require_225114__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_225114__.d(__nested_webpack_exports__, {
/* harmony export */   GetCompositionList: () => (/* binding */ GetCompositionList),
/* harmony export */   GetCompositionListWithId: () => (/* binding */ GetCompositionListWithId)
/* harmony export */ });
/* harmony import */ var _Api_GetAllConceptsByType__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_225114__(/*! ../Api/GetAllConceptsByType */ "./src/Api/GetAllConceptsByType.ts");
/* harmony import */ var _Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_225114__(/*! ../Api/GetAllConnectionsOfCompositionBulk */ "./src/Api/GetAllConnectionsOfCompositionBulk.ts");
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_225114__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _GetComposition__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_225114__(/*! ./GetComposition */ "./src/Services/GetComposition.ts");
/* harmony import */ var _GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_225114__(/*! ./GetConceptByCharacter */ "./src/Services/GetConceptByCharacter.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function GetCompositionList(compositionName, userId, inpage = 10, page = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = yield (0,_GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_4__["default"])(compositionName);
        var CompositionList = [];
        if (concept) {
            yield (0,_Api_GetAllConceptsByType__WEBPACK_IMPORTED_MODULE_0__.GetAllConceptsByType)(compositionName, userId);
            var conceptList = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
            var startPage = inpage * (page - 1);
            var prefetchComposition = [];
            for (var i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    prefetchComposition.push(conceptList[i].id);
                }
            }
            yield (0,_Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_1__.GetAllConnectionsOfCompositionBulk)(prefetchComposition);
            for (var i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    var compositionJson = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_3__.GetCompositionFromMemory)(conceptList[i].id);
                    CompositionList.push(compositionJson);
                }
            }
        }
        return CompositionList;
    });
}
function GetCompositionListWithId(compositionName, userId, inpage = 10, page = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = yield (0,_GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_4__["default"])(compositionName);
        var CompositionList = [];
        if (concept) {
            yield (0,_Api_GetAllConceptsByType__WEBPACK_IMPORTED_MODULE_0__.GetAllConceptsByType)(compositionName, userId);
            var conceptList = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
            var startPage = inpage * (page - 1);
            var prefetchComposition = [];
            for (var i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    prefetchComposition.push(conceptList[i].id);
                }
            }
            yield (0,_Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_1__.GetAllConnectionsOfCompositionBulk)(prefetchComposition);
            for (var i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    var compositionJson = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_3__.GetCompositionWithIdFromMemory)(conceptList[i].id);
                    CompositionList.push(compositionJson);
                }
            }
        }
        return CompositionList;
    });
}


/***/ }),

/***/ "./src/Services/GetConceptByCharacter.ts":
/*!***********************************************!*\
  !*** ./src/Services/GetConceptByCharacter.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_230169__) => {

__nested_webpack_require_230169__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_230169__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetConceptByCharacter)
/* harmony export */ });
/* harmony import */ var _Api_GetConceptByCharacterValue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_230169__(/*! ../Api/GetConceptByCharacterValue */ "./src/Api/GetConceptByCharacterValue.ts");
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_230169__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetConceptByCharacter(characterValue) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_1__.ConceptsData.GetConceptByCharacter(characterValue);
        var literalCharacter = `${characterValue}`;
        if ((concept == null || (concept === null || concept === void 0 ? void 0 : concept.id) == 0) && literalCharacter) {
            yield (0,_Api_GetConceptByCharacterValue__WEBPACK_IMPORTED_MODULE_0__.GetConceptByCharacterValue)(characterValue);
            concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_1__.ConceptsData.GetConceptByCharacter(characterValue);
        }
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/GetConnections.ts":
/*!****************************************!*\
  !*** ./src/Services/GetConnections.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_232450__) => {

__nested_webpack_require_232450__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_232450__.d(__nested_webpack_exports__, {
/* harmony export */   GetConnectionById: () => (/* binding */ GetConnectionById)
/* harmony export */ });
/* harmony import */ var _Api_GetConnection__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_232450__(/*! ../Api/GetConnection */ "./src/Api/GetConnection.ts");
/* harmony import */ var _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_232450__(/*! ../DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetConnectionById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var connection = yield _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_1__.ConnectionData.GetConnection(id);
        if ((connection == null || connection.id == 0) && id != null && id != undefined) {
            var connectionString = yield (0,_Api_GetConnection__WEBPACK_IMPORTED_MODULE_0__.GetConnection)(id);
            connection = connectionString;
        }
        return connection;
    });
}


/***/ }),

/***/ "./src/Services/GetDataFromIndexDb.ts":
/*!********************************************!*\
  !*** ./src/Services/GetDataFromIndexDb.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_234502__) => {

__nested_webpack_require_234502__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_234502__.d(__nested_webpack_exports__, {
/* harmony export */   GetDataFromIndexDb: () => (/* binding */ GetDataFromIndexDb),
/* harmony export */   GetDataFromIndexDbLocal: () => (/* binding */ GetDataFromIndexDbLocal)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_234502__(/*! ../DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
/* harmony import */ var _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_234502__(/*! ../DataStructures/Local/LocalConnectionData */ "./src/DataStructures/Local/LocalConnectionData.ts");
/* harmony import */ var _Database_indexdblocal__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_234502__(/*! ../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
/* harmony import */ var _Database_indexeddb__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_234502__(/*! ../Database/indexeddb */ "./src/Database/indexeddb.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function GetDataFromIndexDb() {
    return __awaiter(this, void 0, void 0, function* () {
        // var conceptList = await getFromDatabaseWithTypeOld("concept");
        GetConnectionsFromIndexDb();
        // console.log(conceptList);
        // if(Array.isArray(conceptList)){
        //     for(var i=0 ;i < conceptList.length ;i++){
        //         ConceptsData.AddConcept(conceptList[i]);
        //     }
        // }
    });
}
function GetDataFromIndexDbLocal() {
    return __awaiter(this, void 0, void 0, function* () {
        // var conceptList = await getAllFromLocalDb("localconcept");
        GetConnectionsFromIndexDbLocal();
        // if(Array.isArray(conceptList)){
        //     for(var i=0 ;i < conceptList.length ;i++){
        //         LocalConceptsData.AddConcept(conceptList[i]);
        //     }
        // }
    });
}
function GetConnectionsFromIndexDb() {
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = yield (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_3__.getFromDatabaseWithTypeOld)("connection");
        if (Array.isArray(connectionList)) {
            for (var i = 0; i < connectionList.length; i++) {
                _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.AddConnectionToMemory(connectionList[i]);
            }
        }
    });
}
function GetConnectionsFromIndexDbLocal() {
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = yield (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_2__.getAllFromLocalDb)("localconnection");
        if (Array.isArray(connectionList)) {
            for (var i = 0; i < connectionList.length; i++) {
                _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_1__.LocalConnectionData.AddConnection(connectionList[i]);
            }
        }
    });
}


/***/ }),

/***/ "./src/Services/GetLink.ts":
/*!*********************************!*\
  !*** ./src/Services/GetLink.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_238358__) => {

__nested_webpack_require_238358__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_238358__.d(__nested_webpack_exports__, {
/* harmony export */   GetLink: () => (/* binding */ GetLink)
/* harmony export */ });
/* harmony import */ var _Api_GetConceptByCharacterAndType__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_238358__(/*! ../Api/GetConceptByCharacterAndType */ "./src/Api/GetConceptByCharacterAndType.ts");
/* harmony import */ var _Api_GetConnectionOfTheConcept__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_238358__(/*! ../Api/GetConnectionOfTheConcept */ "./src/Api/GetConnectionOfTheConcept.ts");
/* harmony import */ var _GetComposition__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_238358__(/*! ./GetComposition */ "./src/Services/GetComposition.ts");
/* harmony import */ var _GetTheConcept__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_238358__(/*! ./GetTheConcept */ "./src/Services/GetTheConcept.ts");
/* harmony import */ var _Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_238358__(/*! ../Api/GetAllConnectionsOfCompositionBulk */ "./src/Api/GetAllConnectionsOfCompositionBulk.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function GetLink(id, linker, inpage = 10, page = 1) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        var output = [];
        var concept = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_3__["default"])(id);
        var linkString = ((_a = concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) + "_s" + "_" + linker;
        var relatedConceptString = yield (0,_Api_GetConceptByCharacterAndType__WEBPACK_IMPORTED_MODULE_0__.GetConceptByCharacterAndType)(linkString, 16);
        var relatedConcept = relatedConceptString;
        if (relatedConcept.id > 0) {
            var connectionsString = yield (0,_Api_GetConnectionOfTheConcept__WEBPACK_IMPORTED_MODULE_1__.GetConnectionOfTheConcept)(relatedConcept.id, concept.id, concept.userId, inpage, page);
            var connections = connectionsString;
            var prefetch = [];
            for (var i = 0; i < connections.length; i++) {
                prefetch.push(connections[i].toTheConceptId);
            }
            yield (0,_Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_4__.GetAllConnectionsOfCompositionBulk)(prefetch);
            for (var i = 0; i < connections.length; i++) {
                let toConceptId = connections[i].toTheConceptId;
                let toConcept = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_3__["default"])(toConceptId);
                let newComposition = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_2__.GetCompositionWithId)(toConcept.id);
                output.push(newComposition);
            }
        }
        return output;
    });
}


/***/ }),

/***/ "./src/Services/GetLinkerConnectionFromConcept.ts":
/*!********************************************************!*\
  !*** ./src/Services/GetLinkerConnectionFromConcept.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_242116__) => {

__nested_webpack_require_242116__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_242116__.d(__nested_webpack_exports__, {
/* harmony export */   GetLinkerConnectionFromConcepts: () => (/* binding */ GetLinkerConnectionFromConcepts)
/* harmony export */ });
/* harmony import */ var _Api_GetAllLinkerConnectionsFromTheConcept__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_242116__(/*! ../Api/GetAllLinkerConnectionsFromTheConcept */ "./src/Api/GetAllLinkerConnectionsFromTheConcept.ts");
/* harmony import */ var _GetTheConcept__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_242116__(/*! ./GetTheConcept */ "./src/Services/GetTheConcept.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetLinkerConnectionFromConcepts(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var connections = yield (0,_Api_GetAllLinkerConnectionsFromTheConcept__WEBPACK_IMPORTED_MODULE_0__.GetAllLinkerConnectionsFromTheConcept)(id);
        for (var i = 0; i < connections.length; i++) {
            let localConnection = connections[i];
            var connectionIdentifier = localConnection.typeId;
            let concept = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_1__["default"])(connectionIdentifier);
            localConnection.type = concept;
        }
        return connections;
    });
}


/***/ }),

/***/ "./src/Services/GetTheConcept.ts":
/*!***************************************!*\
  !*** ./src/Services/GetTheConcept.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_244329__) => {

__nested_webpack_require_244329__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_244329__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetTheConcept)
/* harmony export */ });
/* harmony import */ var _Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_244329__(/*! ../Api/GetConcept */ "./src/Api/GetConcept.ts");
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_244329__(/*! ../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_244329__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function GetTheConcept(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = new _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_1__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
        concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if ((concept == null || concept.id == 0) && id != null && id != undefined) {
            var conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        if (concept) {
            if (concept.type == null) {
                var conceptType = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(concept.typeId);
                if (conceptType == null && concept.typeId != null && concept.typeId != undefined) {
                    var typeConceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(concept.typeId);
                    var typeConcept = typeConceptString;
                    concept.type = typeConcept;
                }
            }
        }
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/GetTheReferent.ts":
/*!****************************************!*\
  !*** ./src/Services/GetTheReferent.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_247179__) => {

__nested_webpack_require_247179__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_247179__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetTheReferent)
/* harmony export */ });
/* harmony import */ var _GetTheConcept__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_247179__(/*! ./GetTheConcept */ "./src/Services/GetTheConcept.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function GetTheReferent(id, userId, referentId) {
    return __awaiter(this, void 0, void 0, function* () {
        var myref = referentId !== null && referentId !== void 0 ? referentId : 0;
        var referent = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_0__["default"])(referentId);
        //var result: ReferentInfo = new ReferentInfo(referent.id, referent.userId, referent.referentId, referent.referentUserId);
        return referent;
    });
}


/***/ }),

/***/ "./src/Services/InitializeSystem.ts":
/*!******************************************!*\
  !*** ./src/Services/InitializeSystem.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_248966__) => {

__nested_webpack_require_248966__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_248966__.d(__nested_webpack_exports__, {
/* harmony export */   PurgatoryDatabaseUpdated: () => (/* binding */ PurgatoryDatabaseUpdated),
/* harmony export */   "default": () => (/* binding */ InitializeSystem)
/* harmony export */ });
/* harmony import */ var _Api_GetAiData__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_248966__(/*! ../Api/GetAiData */ "./src/Api/GetAiData.ts");
/* harmony import */ var _DataStructures_BinaryTree__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_248966__(/*! ../DataStructures/BinaryTree */ "./src/DataStructures/BinaryTree.ts");
/* harmony import */ var _DataStructures_SettingData__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_248966__(/*! ../DataStructures/SettingData */ "./src/DataStructures/SettingData.ts");
/* harmony import */ var _DataStructures_Settings__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_248966__(/*! ../DataStructures/Settings */ "./src/DataStructures/Settings.ts");
/* harmony import */ var _Database_indexeddb__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_248966__(/*! ../Database/indexeddb */ "./src/Database/indexeddb.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function InitializeSystem() {
    return __awaiter(this, void 0, void 0, function* () {
        var statsData = yield (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_4__.GetStatsFromDatabase)();
        var settings = statsData;
        if (!settings.isOnlineSync) {
            console.log("prefetching");
            // await GetAllPrefetchConnections(10267,2000);
            yield (0,_Api_GetAiData__WEBPACK_IMPORTED_MODULE_0__.GetAiData)();
            console.log("this is the binary data", _DataStructures_BinaryTree__WEBPACK_IMPORTED_MODULE_1__.BinaryTree.root);
        }
        else {
            return true;
        }
    });
}
function PurgatoryDatabaseUpdated() {
    return __awaiter(this, void 0, void 0, function* () {
        _DataStructures_Settings__WEBPACK_IMPORTED_MODULE_3__.Settings.isOnlineSync = true;
        var settingData = new _DataStructures_SettingData__WEBPACK_IMPORTED_MODULE_2__.SettingData(_DataStructures_Settings__WEBPACK_IMPORTED_MODULE_3__.Settings.isOnlineSync);
        (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_4__.AiUpdateFlag)(settingData);
    });
}


/***/ }),

/***/ "./src/Services/Local/CreateLocalBinaryTreeFromData.ts":
/*!*************************************************************!*\
  !*** ./src/Services/Local/CreateLocalBinaryTreeFromData.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_252258__) => {

__nested_webpack_require_252258__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_252258__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateLocalBinaryTreeFromData)
/* harmony export */ });
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_252258__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
/* harmony import */ var _Database_indexdblocal__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_252258__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function CreateLocalBinaryTreeFromData() {
    return __awaiter(this, void 0, void 0, function* () {
        var conceptList = yield (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_1__.getAllFromLocalDb)("localconcept");
        if (Array.isArray(conceptList)) {
            for (var i = 0; i < conceptList.length; i++) {
                let concept = conceptList[i];
                _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.AddConceptToMemory(concept);
                // let node = new Node(concept.id, concept, null, null);
                // LocalBinaryTree.addNodeToTree(node);
            }
        }
    });
}


/***/ }),

/***/ "./src/Services/Local/CreateTheCompositionLocal.ts":
/*!*********************************************************!*\
  !*** ./src/Services/Local/CreateTheCompositionLocal.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_254564__) => {

__nested_webpack_require_254564__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_254564__.d(__nested_webpack_exports__, {
/* harmony export */   CreateTheCompositionLocal: () => (/* binding */ CreateTheCompositionLocal)
/* harmony export */ });
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_254564__(/*! ../../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _CreateTheConnectionLocal__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_254564__(/*! ./CreateTheConnectionLocal */ "./src/Services/Local/CreateTheConnectionLocal.ts");
/* harmony import */ var _MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_254564__(/*! ./MakeTheInstanceConceptLocal */ "./src/Services/Local/MakeTheInstanceConceptLocal.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function CreateTheCompositionLocal(json, ofTheConceptId = null, ofTheConceptUserId = null, mainKey = null, userId = null, accessId = null, sessionInformationId = null) {
    return __awaiter(this, void 0, void 0, function* () {
        var localUserId = userId !== null && userId !== void 0 ? userId : 10267;
        var localAccessId = accessId !== null && accessId !== void 0 ? accessId : 10267;
        var localSessionId = sessionInformationId !== null && sessionInformationId !== void 0 ? sessionInformationId : 10267;
        var MainKeyLocal = mainKey !== null && mainKey !== void 0 ? mainKey : 0;
        var MainConcept = new _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
        for (const key in json) {
            if (typeof json[key] != 'string' && typeof json[key] != 'number') {
                if (ofTheConceptId == null && ofTheConceptUserId == null) {
                    var localMainKey = MainKeyLocal;
                    let conceptString = yield (0,_MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_2__.MakeTheInstanceConceptLocal)(key, "", true, localUserId, localAccessId, localSessionId);
                    var concept = conceptString;
                    MainConcept = concept;
                    localMainKey = concept.id;
                    MainKeyLocal = concept.id;
                    yield CreateTheCompositionLocal(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId);
                }
                else {
                    var ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                    var ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 10267;
                    var localMainKey = MainKeyLocal;
                    var conceptString = yield (0,_MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_2__.MakeTheInstanceConceptLocal)(key, "", true, localUserId, localAccessId, localSessionId);
                    var concept = conceptString;
                    yield (0,_CreateTheConnectionLocal__WEBPACK_IMPORTED_MODULE_1__["default"])(ofThe, ofTheUser, concept.id, concept.userId, localMainKey, localSessionId, concept.userId);
                    yield CreateTheCompositionLocal(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId);
                }
            }
            else {
                var ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                var ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 10267;
                var localMainKey = MainKeyLocal;
                var conceptString = yield (0,_MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_2__.MakeTheInstanceConceptLocal)(key, json[key], false, localUserId, localAccessId, localSessionId);
                var concept = conceptString;
                yield (0,_CreateTheConnectionLocal__WEBPACK_IMPORTED_MODULE_1__["default"])(ofThe, ofTheUser, concept.id, concept.userId, localMainKey, localSessionId, concept.userId);
            }
        }
        return MainConcept;
    });
}


/***/ }),

/***/ "./src/Services/Local/CreateTheConceptLocal.ts":
/*!*****************************************************!*\
  !*** ./src/Services/Local/CreateTheConceptLocal.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_259627__) => {

__nested_webpack_require_259627__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_259627__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateTheConceptLocal)
/* harmony export */ });
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_259627__(/*! ../../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_259627__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
/* harmony import */ var _Database_indexdblocal__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_259627__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function CreateTheConceptLocal(referent, userId, categoryId, categoryUserId, typeId, typeUserId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId) {
    return __awaiter(this, void 0, void 0, function* () {
        var id = Math.floor(Math.random() * 100000000);
        var isNew = true;
        var concept = new _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(id, userId, typeId, typeUserId, categoryId, categoryUserId, referentId, referentUserId, referent, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, isNew);
        concept.isTemp = true;
        _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_1__.LocalConceptsData.AddConcept(concept);
        (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_2__.storeToDatabase)("localconcept", concept);
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/Local/CreateTheConnectionLocal.ts":
/*!********************************************************!*\
  !*** ./src/Services/Local/CreateTheConnectionLocal.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_262375__) => {

__nested_webpack_require_262375__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_262375__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateTheConnectionLocal)
/* harmony export */ });
/* harmony import */ var _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_262375__(/*! ../../DataStructures/Connection */ "./src/DataStructures/Connection.ts");
/* harmony import */ var _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_262375__(/*! ../../DataStructures/Local/LocalConnectionData */ "./src/DataStructures/Local/LocalConnectionData.ts");
/* harmony import */ var _Database_indexdblocal__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_262375__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");



function CreateTheConnectionLocal(ofTheConceptId, ofTheConceptUserId, toTheConceptId, toTheConceptUserId, typeId, sessionInformationId, sessionInformationUserId) {
    var orderId = 1;
    var orderUserId = ofTheConceptUserId;
    var typeUserId = ofTheConceptUserId;
    var userId = ofTheConceptUserId;
    var securityId = 0;
    var securityUserId = ofTheConceptUserId;
    var accessId = 4;
    var accessUserId = ofTheConceptUserId;
    if (ofTheConceptId != toTheConceptId) {
        var connection = new _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__.Connection(0, ofTheConceptId, toTheConceptId, ofTheConceptUserId, toTheConceptUserId, userId, typeId, typeUserId, orderId, orderUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
        connection.isTemp = true;
        connection.id = Math.floor(Math.random() * 100000000);
        _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_1__.LocalConnectionData.AddConnection(connection);
        (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_2__.storeToDatabase)("localconnection", connection);
    }
}


/***/ }),

/***/ "./src/Services/Local/GetCompositionListLocal.ts":
/*!*******************************************************!*\
  !*** ./src/Services/Local/GetCompositionListLocal.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_264651__) => {

__nested_webpack_require_264651__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_264651__.d(__nested_webpack_exports__, {
/* harmony export */   GetCompositionListLocal: () => (/* binding */ GetCompositionListLocal),
/* harmony export */   GetCompositionListLocalWithId: () => (/* binding */ GetCompositionListLocalWithId)
/* harmony export */ });
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_264651__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
/* harmony import */ var _GetCompositionLocal__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_264651__(/*! ./GetCompositionLocal */ "./src/Services/Local/GetCompositionLocal.ts");
/* harmony import */ var _GetConceptByCharacterLocal__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_264651__(/*! ./GetConceptByCharacterLocal */ "./src/Services/Local/GetConceptByCharacterLocal.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function GetCompositionListLocal(compositionName, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = yield (0,_GetConceptByCharacterLocal__WEBPACK_IMPORTED_MODULE_2__["default"])(compositionName);
        var CompositionList = [];
        if (concept) {
            var conceptList = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
            for (var i = 0; i < conceptList.length; i++) {
                var compositionJson = yield (0,_GetCompositionLocal__WEBPACK_IMPORTED_MODULE_1__.GetCompositionLocal)(conceptList[i].id);
                CompositionList.push(compositionJson);
            }
        }
        return CompositionList;
    });
}
function GetCompositionListLocalWithId(compositionName, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = yield (0,_GetConceptByCharacterLocal__WEBPACK_IMPORTED_MODULE_2__["default"])(compositionName);
        var CompositionList = [];
        if (concept) {
            var conceptList = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
            for (var i = 0; i < conceptList.length; i++) {
                var compositionJson = yield (0,_GetCompositionLocal__WEBPACK_IMPORTED_MODULE_1__.GetCompositionLocalWithId)(conceptList[i].id);
                CompositionList.push(compositionJson);
            }
        }
        return CompositionList;
    });
}


/***/ }),

/***/ "./src/Services/Local/GetCompositionLocal.ts":
/*!***************************************************!*\
  !*** ./src/Services/Local/GetCompositionLocal.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_268158__) => {

__nested_webpack_require_268158__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_268158__.d(__nested_webpack_exports__, {
/* harmony export */   GetCompositionLocal: () => (/* binding */ GetCompositionLocal),
/* harmony export */   GetCompositionLocalWithId: () => (/* binding */ GetCompositionLocalWithId)
/* harmony export */ });
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_268158__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
/* harmony import */ var _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_268158__(/*! ../../DataStructures/Local/LocalConnectionData */ "./src/DataStructures/Local/LocalConnectionData.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetCompositionLocal(id) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        var returnOutput = {};
        connectionList = yield _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_1__.LocalConnectionData.GetConnectionsOfCompositionLocal(id);
        //connectionList = ConnectionData.GetConnectionsOfComposition(id);
        var compositionList = [];
        for (var i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        var concept = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConcept(id);
        var output = yield recursiveFetchLocal(id, connectionList, compositionList);
        var mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "top";
        returnOutput[mainString] = output;
        return returnOutput;
    });
}
function GetCompositionLocalWithId(id) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        var returnOutput = {};
        connectionList = yield _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_1__.LocalConnectionData.GetConnectionsOfCompositionLocal(id);
        var compositionList = [];
        for (var i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        var concept = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConcept(id);
        if (concept.id != 0) {
            var output = yield recursiveFetchLocal(id, connectionList, compositionList);
            var mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "top";
            returnOutput[mainString] = output;
            var FinalReturn = {};
        }
        FinalReturn['data'] = returnOutput;
        FinalReturn['id'] = id;
        return FinalReturn;
    });
}
function recursiveFetchLocal(id, connectionList, compositionList) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        var output = {};
        var arroutput = [];
        var concept = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConcept(id);
        if (concept.id != 0) {
            if (concept.type == null) {
                var toConceptTypeId = concept.typeId;
                var toConceptType = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConcept(toConceptTypeId);
                concept.type = toConceptType;
            }
        }
        var mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "top";
        if (!compositionList.includes(id)) {
            return concept === null || concept === void 0 ? void 0 : concept.characterValue;
        }
        else {
            for (var i = 0; i < connectionList.length; i++) {
                if (connectionList[i].ofTheConceptId == id) {
                    var toConceptId = connectionList[i].toTheConceptId;
                    var toConcept = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConcept(toConceptId);
                    if (toConcept.id != 0) {
                        if ((toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) == null) {
                            var toConceptTypeId = toConcept.typeId;
                            var toConceptType = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConcept(toConceptTypeId);
                            toConcept.type = toConceptType;
                        }
                    }
                    var regex = "the_";
                    var localmainString = (_d = (_c = toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "top";
                    var localKey = localmainString.replace(regex, "");
                    if (isNaN(Number(localKey))) {
                        if (localKey) {
                            const result = yield recursiveFetchLocal(toConceptId, connectionList, compositionList);
                            output[localKey] = result;
                        }
                    }
                    else {
                        const result = yield recursiveFetchLocal(toConceptId, connectionList, compositionList);
                        arroutput[localKey] = result;
                        output = arroutput;
                    }
                }
            }
        }
        return output;
    });
}


/***/ }),

/***/ "./src/Services/Local/GetConceptByCharacterLocal.ts":
/*!**********************************************************!*\
  !*** ./src/Services/Local/GetConceptByCharacterLocal.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_275259__) => {

__nested_webpack_require_275259__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_275259__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetConceptByCharacterLocal)
/* harmony export */ });
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_275259__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function GetConceptByCharacterLocal(characterValue) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConceptByCharacter(characterValue);
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/Local/MakeTheConceptLocal.ts":
/*!***************************************************!*\
  !*** ./src/Services/Local/MakeTheConceptLocal.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_277002__) => {

__nested_webpack_require_277002__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_277002__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MakeTheConceptLocal)
/* harmony export */ });
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_277002__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
/* harmony import */ var _CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_277002__(/*! ./CreateTheConceptLocal */ "./src/Services/Local/CreateTheConceptLocal.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function MakeTheConceptLocal(referent, userId, categoryId, categoryUserId, typeId, typeUserId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId) {
    return __awaiter(this, void 0, void 0, function* () {
        var conceptString = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConceptByCharacterAndTypeLocal(referent, typeId);
        var concept = conceptString;
        if (concept.id == 0) {
            conceptString = yield (0,_CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_1__["default"])(referent, userId, categoryId, categoryUserId, typeId, typeUserId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            concept = conceptString;
        }
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/Local/MakeTheInstanceConceptLocal.ts":
/*!***********************************************************!*\
  !*** ./src/Services/Local/MakeTheInstanceConceptLocal.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_279553__) => {

__nested_webpack_require_279553__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_279553__.d(__nested_webpack_exports__, {
/* harmony export */   MakeTheInstanceConceptLocal: () => (/* binding */ MakeTheInstanceConceptLocal)
/* harmony export */ });
/* harmony import */ var _Api_Create_CreateTheTextData__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_279553__(/*! ../../Api/Create/CreateTheTextData */ "./src/Api/Create/CreateTheTextData.ts");
/* harmony import */ var _DataStructures_TheTexts__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_279553__(/*! ../../DataStructures/TheTexts */ "./src/DataStructures/TheTexts.ts");
/* harmony import */ var _CreateTheConcept__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_279553__(/*! ../CreateTheConcept */ "./src/Services/CreateTheConcept.ts");
/* harmony import */ var _CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_279553__(/*! ./CreateTheConceptLocal */ "./src/Services/Local/CreateTheConceptLocal.ts");
/* harmony import */ var _MakeTheTypeLocal__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_279553__(/*! ./MakeTheTypeLocal */ "./src/Services/Local/MakeTheTypeLocal.ts");
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_279553__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






function MakeTheInstanceConceptLocal(type, referent, composition = false, userId, accessId, sessionInformationId = 999) {
    var sessionInformationId, accessId;
    return __awaiter(this, void 0, void 0, function* () {
        sessionInformationId = 999;
        var categoryId = 4;
        var categoryUserId = userId;
        var referentId = 0;
        var referentUserId = 999;
        var securityId = 999;
        var securityUserId = userId;
        var sessionInformationUserId = userId;
        accessId = 4;
        var accessUserId = userId;
        var stringToCheck = "";
        var stringLength = referent.length;
        var typeConcept;
        var concept;
        var startsWithThe = type.startsWith("the_");
        if (startsWithThe) {
            stringToCheck = type;
        }
        else {
            stringToCheck = "the_" + type;
        }
        if (composition) {
            var typeConceptString = yield (0,_MakeTheTypeLocal__WEBPACK_IMPORTED_MODULE_4__["default"])(type, sessionInformationId, userId, userId);
            typeConcept = typeConceptString;
            var conceptString = yield (0,_CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_3__["default"])(referent, userId, categoryId, userId, typeConcept.id, typeConcept.userId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            concept = conceptString;
        }
        else if (stringLength > 255) {
            var typeConceptString = yield (0,_MakeTheTypeLocal__WEBPACK_IMPORTED_MODULE_4__["default"])(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
            typeConcept = typeConceptString;
            var conceptString = yield (0,_CreateTheConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(referent, userId, categoryId, userId, typeConcept.id, typeConcept.userId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            concept = conceptString;
            var TheTextsData = new _DataStructures_TheTexts__WEBPACK_IMPORTED_MODULE_1__.TheTexts(userId, referent, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, Date.now().toString(), true);
            var TextDataString = yield (0,_Api_Create_CreateTheTextData__WEBPACK_IMPORTED_MODULE_0__.CreateTextData)(TheTextsData);
            var TextData = TextDataString;
        }
        else {
            var typeConceptString = yield (0,_MakeTheTypeLocal__WEBPACK_IMPORTED_MODULE_4__["default"])(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
            typeConcept = typeConceptString;
            var conceptByCharTypeString = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_5__.LocalConceptsData.GetConceptByCharacterAndTypeLocal(referent, typeConcept.id);
            var conceptTypeCharacter = conceptByCharTypeString;
            // var makeTheNameString = await MakeTheName(referent,userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId,typeConcept.id, typeConcept.userId,conceptTypeCharacter );
            // var makeTheNameConcept = makeTheNameString as Concept;
            concept = conceptTypeCharacter;
            if (conceptTypeCharacter.id == 0 && conceptTypeCharacter.userId == 0) {
                var conceptString = yield (0,_CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_3__["default"])(referent, userId, categoryId, userId, typeConcept.id, typeConcept.userId, 0, 0, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
                concept = conceptString;
            }
        }
        concept.type = typeConcept;
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/Local/MakeTheTypeLocal.ts":
/*!************************************************!*\
  !*** ./src/Services/Local/MakeTheTypeLocal.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_285706__) => {

__nested_webpack_require_285706__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_285706__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MakeTheTypeConceptLocal)
/* harmony export */ });
/* harmony import */ var _CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_285706__(/*! ./CreateTheConceptLocal */ "./src/Services/Local/CreateTheConceptLocal.ts");
/* harmony import */ var _GetConceptByCharacterLocal__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_285706__(/*! ./GetConceptByCharacterLocal */ "./src/Services/Local/GetConceptByCharacterLocal.ts");
/* harmony import */ var _SplitStrings__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_285706__(/*! ../SplitStrings */ "./src/Services/SplitStrings.ts");
/* harmony import */ var _MakeTheConceptLocal__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_285706__(/*! ./MakeTheConceptLocal */ "./src/Services/Local/MakeTheConceptLocal.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function MakeTheTypeConceptLocal(typeString, sessionId, sessionUserId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        var referentId = 999;
        var securityId = 999;
        var sessionInformationUserId = 999;
        var accessId = 999;
        var securityUserId = userId;
        var accessUserId = userId;
        var categoryUserId = userId;
        var securityUserId = userId;
        var existingConcept = yield (0,_GetConceptByCharacterLocal__WEBPACK_IMPORTED_MODULE_1__["default"])(typeString);
        console.log("existing here", typeString);
        console.log(existingConcept);
        if (existingConcept) {
            if (existingConcept.id == 0 || existingConcept.userId == 0) {
                var splittedStringArray = (0,_SplitStrings__WEBPACK_IMPORTED_MODULE_2__.SplitStrings)(typeString);
                if (splittedStringArray[0] == typeString) {
                    var concept = yield (0,_MakeTheConceptLocal__WEBPACK_IMPORTED_MODULE_3__["default"])(typeString, userId, 4, userId, 51, userId, referentId, userId, securityId, userId, accessId, userId, sessionId, userId);
                    existingConcept = concept;
                }
                else {
                    var categoryId = 1;
                    var categoryConcept = MakeTheTypeConceptLocal(splittedStringArray[0], sessionId, sessionUserId, userId);
                    var typeConcept = yield MakeTheTypeConceptLocal(splittedStringArray[1], sessionId, sessionUserId, userId);
                    if (typeConcept) {
                        var concept = yield (0,_CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_0__["default"])(typeString, userId, categoryId, userId, typeConcept.id, userId, referentId, userId, securityId, userId, accessId, userId, sessionId, userId);
                        existingConcept = concept;
                    }
                }
            }
        }
        return existingConcept;
    });
}


/***/ }),

/***/ "./src/Services/MakeTheCharacter.ts":
/*!******************************************!*\
  !*** ./src/Services/MakeTheCharacter.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_289555__) => {

__nested_webpack_require_289555__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_289555__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MakeTheCharacter)
/* harmony export */ });
/* harmony import */ var _MakeTheCharacterData__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_289555__(/*! ./MakeTheCharacterData */ "./src/Services/MakeTheCharacterData.ts");
/* harmony import */ var _MakeTheConcept__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_289555__(/*! ./MakeTheConcept */ "./src/Services/MakeTheConcept.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function MakeTheCharacter(the_character_data, userId, securityId, accessId, accessUserId, sessionId) {
    var accessUserId;
    return __awaiter(this, void 0, void 0, function* () {
        var categoryUserId = userId;
        var securityUserId = userId;
        accessUserId = userId;
        var categoryId = 4;
        var typeId = 51;
        var typeUserId = userId;
        var sessionUserId = userId;
        var referentUserId = userId;
        var lengthOfCharacters = the_character_data.length;
        var concept;
        if (lengthOfCharacters == 1) {
            var referentId = the_character_data.charCodeAt(0);
            var typeIdForCharacter = 49;
            var characterDataString = yield (0,_MakeTheCharacterData__WEBPACK_IMPORTED_MODULE_0__["default"])(the_character_data, userId, securityId, accessId, sessionId);
            concept = (0,_MakeTheConcept__WEBPACK_IMPORTED_MODULE_1__["default"])(the_character_data, userId, categoryId, categoryUserId, referentId, referentUserId, typeIdForCharacter, typeUserId, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId);
        }
        else {
            var characterDataString = yield (0,_MakeTheCharacterData__WEBPACK_IMPORTED_MODULE_0__["default"])(the_character_data, userId, securityId, accessId, sessionId);
            var characterData = characterDataString;
            if (characterData.isNew) {
                var conceptString = yield (0,_MakeTheConcept__WEBPACK_IMPORTED_MODULE_1__["default"])(the_character_data, userId, categoryId, categoryUserId, typeId, typeUserId, characterData.id, characterData.userId, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId);
                concept = conceptString;
            }
            else {
                var conceptString = yield (0,_MakeTheConcept__WEBPACK_IMPORTED_MODULE_1__["default"])(the_character_data, userId, categoryId, categoryUserId, typeId, typeUserId, characterData.id, characterData.userId, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId);
                concept = conceptString;
            }
        }
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/MakeTheCharacterData.ts":
/*!**********************************************!*\
  !*** ./src/Services/MakeTheCharacterData.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_293253__) => {

__nested_webpack_require_293253__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_293253__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MakeTheCharacterData)
/* harmony export */ });
/* harmony import */ var _Api_Create_CreateTheCharacter__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_293253__(/*! ../Api/Create/CreateTheCharacter */ "./src/Api/Create/CreateTheCharacter.ts");
/* harmony import */ var _DataStructures_TheCharacter__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_293253__(/*! ../DataStructures/TheCharacter */ "./src/DataStructures/TheCharacter.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function MakeTheCharacterData(the_character_data, userId, securityId, accessId, sessionId) {
    return __awaiter(this, void 0, void 0, function* () {
        var categoryUserId = userId;
        var accessUserId = userId;
        var securityUserId = userId;
        var sessionInformationUserId = userId;
        var theCharacter = new _DataStructures_TheCharacter__WEBPACK_IMPORTED_MODULE_1__.TheCharacter(userId, the_character_data, securityId, securityUserId, accessId, accessUserId, sessionId, sessionInformationUserId, "", false);
        var output = yield (0,_Api_Create_CreateTheCharacter__WEBPACK_IMPORTED_MODULE_0__.CreateTheCharacter)(theCharacter);
        var returner = output;
        return returner;
    });
}


/***/ }),

/***/ "./src/Services/MakeTheConcept.ts":
/*!****************************************!*\
  !*** ./src/Services/MakeTheConcept.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_295534__) => {

__nested_webpack_require_295534__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_295534__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MakeTheConcept)
/* harmony export */ });
/* harmony import */ var _Api_GetConceptByCharacterAndType__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_295534__(/*! ../Api/GetConceptByCharacterAndType */ "./src/Api/GetConceptByCharacterAndType.ts");
/* harmony import */ var _CreateTheConcept__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_295534__(/*! ./CreateTheConcept */ "./src/Services/CreateTheConcept.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function MakeTheConcept(referent, userId, categoryId, categoryUserId, typeId, typeUserId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId) {
    return __awaiter(this, void 0, void 0, function* () {
        var conceptString = yield (0,_Api_GetConceptByCharacterAndType__WEBPACK_IMPORTED_MODULE_0__.GetConceptByCharacterAndType)(referent, typeId);
        var concept = conceptString;
        if (concept.id == 0) {
            conceptString = yield (0,_CreateTheConcept__WEBPACK_IMPORTED_MODULE_1__["default"])(referent, userId, categoryId, categoryUserId, typeId, typeUserId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            concept = conceptString;
        }
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/MakeTheInstanceConcept.ts":
/*!************************************************!*\
  !*** ./src/Services/MakeTheInstanceConcept.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_297963__) => {

__nested_webpack_require_297963__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_297963__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MakeTheInstanceConcept)
/* harmony export */ });
/* harmony import */ var _Api_Create_CreateTheTextData__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_297963__(/*! ../Api/Create/CreateTheTextData */ "./src/Api/Create/CreateTheTextData.ts");
/* harmony import */ var _Api_GetConceptByCharacterAndType__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_297963__(/*! ../Api/GetConceptByCharacterAndType */ "./src/Api/GetConceptByCharacterAndType.ts");
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_297963__(/*! ../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _DataStructures_TheTexts__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_297963__(/*! ../DataStructures/TheTexts */ "./src/DataStructures/TheTexts.ts");
/* harmony import */ var _CreateTheConcept__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_297963__(/*! ./CreateTheConcept */ "./src/Services/CreateTheConcept.ts");
/* harmony import */ var _MakeTheName__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_297963__(/*! ./MakeTheName */ "./src/Services/MakeTheName.ts");
/* harmony import */ var _MakeTheTypeConcept__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_297963__(/*! ./MakeTheTypeConcept */ "./src/Services/MakeTheTypeConcept.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







function MakeTheInstanceConcept(type, referent, composition = false, userId, accessId, sessionInformationId = 999) {
    var sessionInformationId, accessId;
    return __awaiter(this, void 0, void 0, function* () {
        sessionInformationId = 999;
        var categoryId = 4;
        var categoryUserId = userId;
        var referentId = 0;
        var referentUserId = 999;
        var securityId = 999;
        var securityUserId = userId;
        var sessionInformationUserId = userId;
        accessId = 4;
        var accessUserId = userId;
        var stringToCheck = "";
        var stringLength = referent.length;
        var typeConcept = new _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_2__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
        var concept;
        var startsWithThe = type.startsWith("the_");
        if (startsWithThe) {
            stringToCheck = type;
        }
        else {
            stringToCheck = "the_" + type;
        }
        if (composition) {
            var typeConceptString = yield (0,_MakeTheTypeConcept__WEBPACK_IMPORTED_MODULE_6__["default"])(type, sessionInformationId, userId, userId);
            typeConcept = typeConceptString;
            var conceptString = yield (0,_CreateTheConcept__WEBPACK_IMPORTED_MODULE_4__["default"])(referent, userId, categoryId, userId, typeConcept.id, typeConcept.userId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            concept = conceptString;
        }
        else if (stringLength > 255) {
            var typeConceptString = yield (0,_MakeTheTypeConcept__WEBPACK_IMPORTED_MODULE_6__["default"])(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
            typeConcept = typeConceptString;
            var conceptString = yield (0,_CreateTheConcept__WEBPACK_IMPORTED_MODULE_4__["default"])(referent, userId, categoryId, userId, typeConcept.id, typeConcept.userId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            concept = conceptString;
            var TheTextsData = new _DataStructures_TheTexts__WEBPACK_IMPORTED_MODULE_3__.TheTexts(userId, referent, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, Date.now().toString(), true);
            var TextDataString = yield (0,_Api_Create_CreateTheTextData__WEBPACK_IMPORTED_MODULE_0__.CreateTextData)(TheTextsData);
            var TextData = TextDataString;
        }
        else {
            var typeConceptString = yield (0,_MakeTheTypeConcept__WEBPACK_IMPORTED_MODULE_6__["default"])(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
            typeConcept = typeConceptString;
            var conceptByCharTypeString = yield (0,_Api_GetConceptByCharacterAndType__WEBPACK_IMPORTED_MODULE_1__.GetConceptByCharacterAndType)(referent, typeConcept.id);
            var conceptTypeCharacter = conceptByCharTypeString;
            var makeTheNameString = yield (0,_MakeTheName__WEBPACK_IMPORTED_MODULE_5__.MakeTheName)(referent, userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, typeConcept.id, typeConcept.userId, conceptTypeCharacter);
            var makeTheNameConcept = makeTheNameString;
            concept = conceptTypeCharacter;
            if (conceptTypeCharacter.id == 0 && conceptTypeCharacter.userId == 0) {
                var conceptString = yield (0,_CreateTheConcept__WEBPACK_IMPORTED_MODULE_4__["default"])(referent, userId, categoryId, userId, typeConcept.id, typeConcept.userId, makeTheNameConcept.id, makeTheNameConcept.userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
                concept = conceptString;
            }
        }
        // if(concept){
        //     if(concept.type == null){
        //         var conceptType = ConceptsData.GetConcept(concept.typeId);
        //         if(conceptType == null && concept.typeId != null && concept.typeId != undefined){
        //             var typeConceptStringNew = await GetConcept(concept.typeId);
        //             var newTypeConcept = typeConceptStringNew as Concept;
        //             concept.type = newTypeConcept;
        //         }
        //     }
        // }
        concept.type = typeConcept;
        console.log("this is the concept returned by make the instance concept", concept);
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/MakeTheName.ts":
/*!*************************************!*\
  !*** ./src/Services/MakeTheName.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_304922__) => {

__nested_webpack_require_304922__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_304922__.d(__nested_webpack_exports__, {
/* harmony export */   MakeTheName: () => (/* binding */ MakeTheName)
/* harmony export */ });
/* harmony import */ var _GetTheReferent__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_304922__(/*! ./GetTheReferent */ "./src/Services/GetTheReferent.ts");
/* harmony import */ var _MakeTheCharacter__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_304922__(/*! ./MakeTheCharacter */ "./src/Services/MakeTheCharacter.ts");
/* harmony import */ var _MakeTheConcept__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_304922__(/*! ./MakeTheConcept */ "./src/Services/MakeTheConcept.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function MakeTheName(theCharacterData, userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, typeId, typeUserId, existingConcept) {
    var accessId, accessUserId;
    return __awaiter(this, void 0, void 0, function* () {
        var nameTypeId = 12;
        var categoryId = 4;
        var sessionId = sessionInformationId !== null && sessionInformationId !== void 0 ? sessionInformationId : 999;
        var sessionUserId = sessionInformationUserId !== null && sessionInformationUserId !== void 0 ? sessionInformationUserId : 999;
        accessId = accessId !== null && accessId !== void 0 ? accessId : 4;
        accessUserId = accessUserId !== null && accessUserId !== void 0 ? accessUserId : 999;
        var categoryUserId = 999;
        var referentInfo;
        var characterConcept;
        if (existingConcept.id > 0 && existingConcept.userId > 0) {
            characterConcept = yield (0,_GetTheReferent__WEBPACK_IMPORTED_MODULE_0__["default"])(existingConcept.id, existingConcept.userId, existingConcept.referent);
        }
        else {
            characterConcept = (yield (0,_MakeTheCharacter__WEBPACK_IMPORTED_MODULE_1__["default"])(theCharacterData, userId, securityId, accessId, accessUserId, sessionId));
            existingConcept = yield (0,_MakeTheConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(theCharacterData, userId, categoryId, categoryUserId, nameTypeId, typeUserId, characterConcept.id, characterConcept.userId, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId);
        }
        return existingConcept;
    });
}


/***/ }),

/***/ "./src/Services/MakeTheTimestamp.ts":
/*!******************************************!*\
  !*** ./src/Services/MakeTheTimestamp.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_308201__) => {

__nested_webpack_require_308201__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_308201__.d(__nested_webpack_exports__, {
/* harmony export */   MakeTheTimestamp: () => (/* binding */ MakeTheTimestamp)
/* harmony export */ });
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_308201__(/*! ../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _MakeTheConcept__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_308201__(/*! ./MakeTheConcept */ "./src/Services/MakeTheConcept.ts");
/* harmony import */ var _MakeTheTypeConcept__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_308201__(/*! ./MakeTheTypeConcept */ "./src/Services/MakeTheTypeConcept.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function MakeTheTimestamp(type, referent, userId, accessId, sessionInformationId = 999) {
    var sessionInformationId, accessId;
    return __awaiter(this, void 0, void 0, function* () {
        sessionInformationId = 999;
        var categoryId = 4;
        var categoryUserId = userId;
        var referentId = 0;
        var referentUserId = 999;
        var securityId = 999;
        var securityUserId = userId;
        var sessionInformationUserId = userId;
        accessId = 4;
        var accessUserId = userId;
        var stringToCheck = "";
        var startsWithThe = type.startsWith("the_");
        var typeConcept = new _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
        var concept;
        if (startsWithThe) {
            stringToCheck = type;
        }
        else {
            stringToCheck = "the_" + type;
        }
        var typeConceptString = yield (0,_MakeTheTypeConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
        typeConcept = typeConceptString;
        var conceptString = yield (0,_MakeTheConcept__WEBPACK_IMPORTED_MODULE_1__["default"])(referent, userId, categoryId, userId, typeConcept.id, typeConcept.userId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
        concept = conceptString;
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/MakeTheTypeConcept.ts":
/*!********************************************!*\
  !*** ./src/Services/MakeTheTypeConcept.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_311380__) => {

__nested_webpack_require_311380__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_311380__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MakeTheTypeConcept)
/* harmony export */ });
/* harmony import */ var _CreateTheConcept__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_311380__(/*! ./CreateTheConcept */ "./src/Services/CreateTheConcept.ts");
/* harmony import */ var _GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_311380__(/*! ./GetConceptByCharacter */ "./src/Services/GetConceptByCharacter.ts");
/* harmony import */ var _MakeTheCharacter__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_311380__(/*! ./MakeTheCharacter */ "./src/Services/MakeTheCharacter.ts");
/* harmony import */ var _SplitStrings__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_311380__(/*! ./SplitStrings */ "./src/Services/SplitStrings.ts");
var __awaiter = ( false) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function MakeTheTypeConcept(typeString, sessionId, sessionUserId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        var referentId = 999;
        var securityId = 999;
        var sessionInformationUserId = 999;
        var accessId = 999;
        var securityUserId = userId;
        var accessUserId = userId;
        var categoryUserId = userId;
        var securityUserId = userId;
        var existingConcept = yield (0,_GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_1__["default"])(typeString);
        if (existingConcept) {
            if (existingConcept.id == 0 || existingConcept.userId == 0) {
                var splittedStringArray = (0,_SplitStrings__WEBPACK_IMPORTED_MODULE_3__.SplitStrings)(typeString);
                if (splittedStringArray[0] == typeString) {
                    var conceptString = yield (0,_MakeTheCharacter__WEBPACK_IMPORTED_MODULE_2__["default"])(typeString, userId, securityId, accessId, accessUserId, sessionId);
                    existingConcept = conceptString;
                }
                else {
                    var categoryId = 1;
                    var categoryConcept = MakeTheTypeConcept(splittedStringArray[0], sessionId, sessionUserId, userId);
                    var typeConcept = yield MakeTheTypeConcept(splittedStringArray[1], sessionId, sessionUserId, userId);
                    if (typeConcept) {
                        var concept = yield (0,_CreateTheConcept__WEBPACK_IMPORTED_MODULE_0__["default"])(typeString, userId, categoryId, userId, typeConcept.id, userId, referentId, userId, securityId, userId, accessId, userId, sessionId, userId);
                        existingConcept = concept;
                    }
                }
            }
        }
        return existingConcept;
    });
}


/***/ }),

/***/ "./src/Services/SplitStrings.ts":
/*!**************************************!*\
  !*** ./src/Services/SplitStrings.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_314993__) => {

__nested_webpack_require_314993__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_314993__.d(__nested_webpack_exports__, {
/* harmony export */   SplitStrings: () => (/* binding */ SplitStrings)
/* harmony export */ });
function SplitStrings(typeString) {
    const SplittedStrings = typeString.split("_");
    return SplittedStrings;
}


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_315510__) => {

__nested_webpack_require_315510__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_315510__.d(__nested_webpack_exports__, {
/* harmony export */   BaseUrl: () => (/* reexport safe */ _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_31__.BaseUrl),
/* harmony export */   Concept: () => (/* reexport safe */ _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_25__.Concept),
/* harmony export */   ConceptsData: () => (/* reexport safe */ _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_26__.ConceptsData),
/* harmony export */   ConnectionData: () => (/* reexport safe */ _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_27__.ConnectionData),
/* harmony export */   CreateComposition: () => (/* reexport safe */ _Services_CreateTheComposition__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   CreateConnectionBetweenTwoConcepts: () => (/* reexport safe */ _Services_CreateConnectionBetweenTwoConcepts__WEBPACK_IMPORTED_MODULE_10__.CreateConnectionBetweenTwoConcepts),
/* harmony export */   CreateTheCompositionLocal: () => (/* reexport safe */ _Services_Local_CreateTheCompositionLocal__WEBPACK_IMPORTED_MODULE_9__.CreateTheCompositionLocal),
/* harmony export */   CreateTheConnection: () => (/* reexport safe */ _Services_CreateTheConnection__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   DeleteConceptById: () => (/* reexport safe */ _Services_DeleteConcept__WEBPACK_IMPORTED_MODULE_19__.DeleteConceptById),
/* harmony export */   DeleteConnectionById: () => (/* reexport safe */ _Services_DeleteConnection__WEBPACK_IMPORTED_MODULE_20__.DeleteConnectionById),
/* harmony export */   GetAllConnectionsOfComposition: () => (/* reexport safe */ _Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_5__.GetAllConnectionsOfComposition),
/* harmony export */   GetComposition: () => (/* reexport safe */ _Services_GetComposition__WEBPACK_IMPORTED_MODULE_6__.GetComposition),
/* harmony export */   GetCompositionList: () => (/* reexport safe */ _Services_GetCompositionList__WEBPACK_IMPORTED_MODULE_3__.GetCompositionList),
/* harmony export */   GetCompositionListLocal: () => (/* reexport safe */ _Services_Local_GetCompositionListLocal__WEBPACK_IMPORTED_MODULE_4__.GetCompositionListLocal),
/* harmony export */   GetCompositionListLocalWithId: () => (/* reexport safe */ _Services_Local_GetCompositionListLocal__WEBPACK_IMPORTED_MODULE_4__.GetCompositionListLocalWithId),
/* harmony export */   GetCompositionListWithId: () => (/* reexport safe */ _Services_GetCompositionList__WEBPACK_IMPORTED_MODULE_3__.GetCompositionListWithId),
/* harmony export */   GetCompositionLocal: () => (/* reexport safe */ _Services_Local_GetCompositionLocal__WEBPACK_IMPORTED_MODULE_7__.GetCompositionLocal),
/* harmony export */   GetCompositionLocalWithId: () => (/* reexport safe */ _Services_Local_GetCompositionLocal__WEBPACK_IMPORTED_MODULE_7__.GetCompositionLocalWithId),
/* harmony export */   GetCompositionWithId: () => (/* reexport safe */ _Services_GetComposition__WEBPACK_IMPORTED_MODULE_6__.GetCompositionWithId),
/* harmony export */   GetConceptByCharacter: () => (/* reexport safe */ _Services_GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   GetConnectionById: () => (/* reexport safe */ _Services_GetConnections__WEBPACK_IMPORTED_MODULE_21__.GetConnectionById),
/* harmony export */   GetLink: () => (/* reexport safe */ _Services_GetLink__WEBPACK_IMPORTED_MODULE_17__.GetLink),
/* harmony export */   GetLinkerConnectionFromConcepts: () => (/* reexport safe */ _Services_GetLinkerConnectionFromConcept__WEBPACK_IMPORTED_MODULE_18__.GetLinkerConnectionFromConcepts),
/* harmony export */   GetTheConcept: () => (/* reexport safe */ _Services_GetTheConcept__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   MakeTheInstanceConcept: () => (/* reexport safe */ _Services_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   MakeTheInstanceConceptLocal: () => (/* reexport safe */ _Services_Local_MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_13__.MakeTheInstanceConceptLocal),
/* harmony export */   MakeTheTimestamp: () => (/* reexport safe */ _Services_MakeTheTimestamp__WEBPACK_IMPORTED_MODULE_22__.MakeTheTimestamp),
/* harmony export */   RecursiveSearchApi: () => (/* reexport safe */ _Api_RecursiveSearch__WEBPACK_IMPORTED_MODULE_23__.RecursiveSearchApi),
/* harmony export */   SplitStrings: () => (/* reexport safe */ _Services_SplitStrings__WEBPACK_IMPORTED_MODULE_2__.SplitStrings),
/* harmony export */   SyncData: () => (/* reexport safe */ _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_24__.SyncData),
/* harmony export */   getFromDatabaseWithType: () => (/* reexport safe */ _Database_indexeddb__WEBPACK_IMPORTED_MODULE_14__.getFromDatabaseWithType),
/* harmony export */   getFromDatabaseWithTypeOld: () => (/* reexport safe */ _Database_indexeddb__WEBPACK_IMPORTED_MODULE_14__.getFromDatabaseWithTypeOld),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   storeToDatabase: () => (/* reexport safe */ _Database_indexeddb__WEBPACK_IMPORTED_MODULE_14__.storeToDatabase)
/* harmony export */ });
/* harmony import */ var _Services_CreateBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_315510__(/*! ./Services/CreateBinaryTreeFromData */ "./src/Services/CreateBinaryTreeFromData.ts");
/* harmony import */ var _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_315510__(/*! ./DataStructures/IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _Services_SplitStrings__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_315510__(/*! ./Services/SplitStrings */ "./src/Services/SplitStrings.ts");
/* harmony import */ var _Services_GetCompositionList__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_315510__(/*! ./Services/GetCompositionList */ "./src/Services/GetCompositionList.ts");
/* harmony import */ var _Services_Local_GetCompositionListLocal__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_315510__(/*! ./Services/Local/GetCompositionListLocal */ "./src/Services/Local/GetCompositionListLocal.ts");
/* harmony import */ var _Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_315510__(/*! ./Api/GetAllConnectionsOfComposition */ "./src/Api/GetAllConnectionsOfComposition.ts");
/* harmony import */ var _Services_GetComposition__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_315510__(/*! ./Services/GetComposition */ "./src/Services/GetComposition.ts");
/* harmony import */ var _Services_Local_GetCompositionLocal__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_315510__(/*! ./Services/Local/GetCompositionLocal */ "./src/Services/Local/GetCompositionLocal.ts");
/* harmony import */ var _Services_CreateTheComposition__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_315510__(/*! ./Services/CreateTheComposition */ "./src/Services/CreateTheComposition.ts");
/* harmony import */ var _Services_Local_CreateTheCompositionLocal__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_315510__(/*! ./Services/Local/CreateTheCompositionLocal */ "./src/Services/Local/CreateTheCompositionLocal.ts");
/* harmony import */ var _Services_CreateConnectionBetweenTwoConcepts__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_315510__(/*! ./Services/CreateConnectionBetweenTwoConcepts */ "./src/Services/CreateConnectionBetweenTwoConcepts.ts");
/* harmony import */ var _Services_GetTheConcept__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_315510__(/*! ./Services/GetTheConcept */ "./src/Services/GetTheConcept.ts");
/* harmony import */ var _Services_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_315510__(/*! ./Services/MakeTheInstanceConcept */ "./src/Services/MakeTheInstanceConcept.ts");
/* harmony import */ var _Services_Local_MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_315510__(/*! ./Services/Local/MakeTheInstanceConceptLocal */ "./src/Services/Local/MakeTheInstanceConceptLocal.ts");
/* harmony import */ var _Database_indexeddb__WEBPACK_IMPORTED_MODULE_14__ = __nested_webpack_require_315510__(/*! ./Database/indexeddb */ "./src/Database/indexeddb.ts");
/* harmony import */ var _Services_CreateTheConnection__WEBPACK_IMPORTED_MODULE_15__ = __nested_webpack_require_315510__(/*! ./Services/CreateTheConnection */ "./src/Services/CreateTheConnection.ts");
/* harmony import */ var _Services_GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_16__ = __nested_webpack_require_315510__(/*! ./Services/GetConceptByCharacter */ "./src/Services/GetConceptByCharacter.ts");
/* harmony import */ var _Services_GetLink__WEBPACK_IMPORTED_MODULE_17__ = __nested_webpack_require_315510__(/*! ./Services/GetLink */ "./src/Services/GetLink.ts");
/* harmony import */ var _Services_GetLinkerConnectionFromConcept__WEBPACK_IMPORTED_MODULE_18__ = __nested_webpack_require_315510__(/*! ./Services/GetLinkerConnectionFromConcept */ "./src/Services/GetLinkerConnectionFromConcept.ts");
/* harmony import */ var _Services_DeleteConcept__WEBPACK_IMPORTED_MODULE_19__ = __nested_webpack_require_315510__(/*! ./Services/DeleteConcept */ "./src/Services/DeleteConcept.ts");
/* harmony import */ var _Services_DeleteConnection__WEBPACK_IMPORTED_MODULE_20__ = __nested_webpack_require_315510__(/*! ./Services/DeleteConnection */ "./src/Services/DeleteConnection.ts");
/* harmony import */ var _Services_GetConnections__WEBPACK_IMPORTED_MODULE_21__ = __nested_webpack_require_315510__(/*! ./Services/GetConnections */ "./src/Services/GetConnections.ts");
/* harmony import */ var _Services_MakeTheTimestamp__WEBPACK_IMPORTED_MODULE_22__ = __nested_webpack_require_315510__(/*! ./Services/MakeTheTimestamp */ "./src/Services/MakeTheTimestamp.ts");
/* harmony import */ var _Api_RecursiveSearch__WEBPACK_IMPORTED_MODULE_23__ = __nested_webpack_require_315510__(/*! ./Api/RecursiveSearch */ "./src/Api/RecursiveSearch.ts");
/* harmony import */ var _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_24__ = __nested_webpack_require_315510__(/*! ./DataStructures/SyncData */ "./src/DataStructures/SyncData.ts");
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_25__ = __nested_webpack_require_315510__(/*! ./DataStructures/Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_26__ = __nested_webpack_require_315510__(/*! ./DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_27__ = __nested_webpack_require_315510__(/*! ./DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
/* harmony import */ var _Services_GetDataFromIndexDb__WEBPACK_IMPORTED_MODULE_28__ = __nested_webpack_require_315510__(/*! ./Services/GetDataFromIndexDb */ "./src/Services/GetDataFromIndexDb.ts");
/* harmony import */ var _Services_Local_CreateLocalBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_29__ = __nested_webpack_require_315510__(/*! ./Services/Local/CreateLocalBinaryTreeFromData */ "./src/Services/Local/CreateLocalBinaryTreeFromData.ts");
/* harmony import */ var _Services_InitializeSystem__WEBPACK_IMPORTED_MODULE_30__ = __nested_webpack_require_315510__(/*! ./Services/InitializeSystem */ "./src/Services/InitializeSystem.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_31__ = __nested_webpack_require_315510__(/*! ./DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");


































function init(url = "", aiurl = "") {
    _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_31__.BaseUrl.BASE_URL = url;
    _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_31__.BaseUrl.AI_URL = aiurl;
    (0,_Services_InitializeSystem__WEBPACK_IMPORTED_MODULE_30__["default"])().then(() => {
        const start = new Date().getTime();
        (0,_Services_CreateBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_0__["default"])().then(() => {
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isDataLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isCharacterLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isTypeLoaded = true;
            let elapsed = new Date().getTime() - start;
            console.log("The time taken to prepare concept  data is  ", elapsed);
        });
        // CreateCharacterBinaryTreeFromData().then(()=>{
        //    IdentifierFlags.isCharacterLoaded= true;
        //    let elapsed = new Date().getTime() - start;
        //    console.log("The time taken to prepare character data is  ", elapsed);
        // });
        // CreateTypeTreeFromData().then(()=>{
        //    IdentifierFlags.isTypeLoaded= true;
        //    let elapsed = new Date().getTime() - start;
        //    console.log("The time taken to prepare data is ", elapsed);
        // });
        (0,_Services_Local_CreateLocalBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_29__["default"])().then(() => {
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isLocalDataLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isLocalTypeLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isLocalCharacterLoaded = true;
            let elapsed = new Date().getTime() - start;
            console.log("The time taken to prepare local concept  ", elapsed);
        });
        // CreateLocalCharacterBinaryTreeFromData().then(()=>{
        //    IdentifierFlags.isLocalCharacterLoaded = true;
        // });
        // CreateLocalBinaryTypeTreeFromData().then(()=>{
        //    IdentifierFlags.isLocalTypeLoaded = true;
        //    console.log("type",IdentifierFlags.isLocalTypeLoaded);
        // });
        (0,_Services_GetDataFromIndexDb__WEBPACK_IMPORTED_MODULE_28__.GetDataFromIndexDbLocal)().then(() => {
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isLocalConnectionLoaded = true;
        });
        (0,_Services_GetDataFromIndexDb__WEBPACK_IMPORTED_MODULE_28__.GetDataFromIndexDb)().then(() => {
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isConnectionLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isConnectionTypeLoaded = true;
            let elapsed = new Date().getTime() - start;
            console.log("The time taken to prepare connections  ", elapsed);
        });
    });
}
//  GetDataFromIndexDb(); 
// const form = document.querySelector('#myForm') as HTMLFormElement;
// //const form2 = document.querySelector('#userForm') as HTMLFormElement;
// const form3 = document.querySelector('#compositionForm') as HTMLFormElement;
// const jsonForm = document.querySelector('#jsonForm') as HTMLFormElement;
// const nameForm = document.querySelector('#nameform') as HTMLFormElement;
// const getname = document.querySelector('#getname') as HTMLFormElement;
// var json = {
//     "asdgsaddff": {
//         "adgasdfsdf": {
//             "asdg": "tame",
//             "briderarr": ["hello", "tre"]
//         }
//     }
// };
// setInterval(function(){
//     console.log("syncing");
//     SyncData.SyncDataOnline()
// }, 5000);
// form.addEventListener('submit', (event) => {
//    event.preventDefault();
//    const conceptIdElement = document.querySelector('#conceptid') as HTMLInputElement;
//    const conceptId = conceptIdElement.value;
//    GetComposition(Number(conceptId)).then(output=>{
//     const jsonElemnt = document.querySelector('#jsonoutput') as HTMLInputElement;
//     var json = JSON.stringify(output);
//     console.log(json);
//     jsonElemnt.innerHTML = json;
//    });
// });
// getname.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const conceptIdElement = document.querySelector('#nameconceptid') as HTMLInputElement;
//     const conceptId = conceptIdElement.value;
//     GetComposition(Number(conceptId)).then(output=>{
//         const firstNameElement = document.querySelector('#firstname') as HTMLInputElement;
//         const lastNameElement = document.querySelector('#lastname') as HTMLInputElement;
//         console.log(output);
//         firstNameElement.value = output.namedata.firstname;
//         lastNameElement.value = output.namedata.lastname;
//     });
//  });
// nameForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const firstNameElement = document.querySelector('#firstname') as HTMLInputElement;
//     const firstname = firstNameElement.value;
//     const lastNameElement = document.querySelector('#lastname') as HTMLInputElement;
//     const lastname = lastNameElement.value;
//     var json = {
//         "namedata":{
//             "firstname": firstname,
//             "lastname": lastname
//         }
//     }
//     console.log(json);
//     CreateTheComposition(json).then((value)=>{
//         const outputid = document.querySelector('#outputid') as HTMLInputElement;
//         var concept = value as Concept;
//         outputid.innerHTML = concept.id.toString();
//         console.log('this is the test for final');
//         console.log(value);
//     });
//     });
// jsonForm.addEventListener('submit', (event) =>{
//     event.preventDefault();
//     const compositionNameElement = document.querySelector("#jsondata") as HTMLInputElement;
//     const compositionName = compositionNameElement.value;
//     console.log("this is the composition name");
//     console.log(compositionName);
//     var jon = JSON.parse(compositionName);
//     CreateTheComposition(jon).then((value)=>{
//         const outputid = document.querySelector('#outputid') as HTMLInputElement;
//         var concept = value as Concept;
//         outputid.innerHTML = concept.id.toString();
//         console.log('this is the test for final');
//         console.log(value);
//     });
// });
// form3.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const compositionNameElement = document.querySelector("#composition_name") as HTMLInputElement;
//     const compositionName = compositionNameElement.value;
//     GetCompositionList(compositionName).then(output=>{
//         const jsonElemnt = document.querySelector('#jsonoutput') as HTMLInputElement;
//         var json = JSON.stringify(output);
//         console.log(json);
//         jsonElemnt.innerHTML = JSON.stringify(json);
//     });
// });
// // form2.addEventListener('submit', (event) => {
// //     event.preventDefault();
// //     const userIdElement = document.querySelector("#userid") as HTMLInputElement;
// //     const userId = userIdElement.value;
// //     GetAllUserConcepts(Number(userId));
// //     GetAllUserConnections(Number(userId)).then(()=>{
// //         console.log("got all the data");
// //     });
// //  });
// window.onmousedown = (ev: MouseEvent): any => {
//     var isMouseDown = true;
//     var canvas = document.querySelector('#myCanvas') as HTMLCanvasElement;
//     var ctx = canvas.getContext('2d') as CanvasRenderingContext2D ;
//     var _difference_from_window = canvas.getBoundingClientRect();
//     var width_difference = 0;
//     var height_difference = 0;
//     //Update mouse position at time of down
//     var mouse_x_coordinate = ev.x - _difference_from_window.left + window.scrollX;
//     var mouse_y_coordinate = ev.y - _difference_from_window.top + window.scrollY;
//     var selected_concept_object = selectConceptObject(mouse_x_coordinate, mouse_y_coordinate);
//     window.onmousemove = (ev: MouseEvent): any => {
//         var previous_mouse_x = mouse_x_coordinate;
//         var previous_mouse_y = mouse_y_coordinate;
//         var new_mouse_x_coordinate = ev.x - _difference_from_window.left + window.scrollX;
//         var new_mouse_y_coordinate = ev.y - _difference_from_window.top + window.scrollY;
//         //how much did the mouse move
//         var mouse_x_difference = new_mouse_x_coordinate - previous_mouse_x;
//         var mouse_y_difference = new_mouse_y_coordinate - previous_mouse_y;
//         if(selected_concept_object){
//             if(isMouseDown){
//                 selected_concept_object.x = new_mouse_x_coordinate;
//                 selected_concept_object.y = new_mouse_y_coordinate;
//             }
//         }
//     }
//     window.onmouseup = (ev: MouseEvent): any => {
//         isMouseDown = false;
//         selected_concept_object  = null;
//     }
//}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_336127__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_336127__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_336127__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_336127__.o(definition, key) && !__nested_webpack_require_336127__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_336127__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_336127__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_336127__("./src/app.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE1BQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDBCQUEwQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0EsUUFBUTtBQUNSLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDak5BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHNjY3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0FwaS9DcmVhdGUvQ3JlYXRlVGhlQ2hhcmFjdGVyLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0FwaS9DcmVhdGUvQ3JlYXRlVGhlQ29uY2VwdEFwaS50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9BcGkvQ3JlYXRlL0NyZWF0ZVRoZUNvbm5lY3Rpb25BcGkudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvQXBpL0NyZWF0ZS9DcmVhdGVUaGVUZXh0RGF0YS50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9BcGkvRGVsZXRlVGhlQ29uY2VwdC50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9BcGkvR2V0QWlEYXRhLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0FwaS9HZXRBbGxDb25jZXB0c0J5VHlwZS50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9BcGkvR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0FwaS9HZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb25CdWxrLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0FwaS9HZXRBbGxMaW5rZXJDb25uZWN0aW9uc0Zyb21UaGVDb25jZXB0LnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0FwaS9HZXRDb25jZXB0LnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0FwaS9HZXRDb25jZXB0QnVsay50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9BcGkvR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZS50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9BcGkvR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyVmFsdWUudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvQXBpL0dldENvbm5lY3Rpb24udHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvQXBpL0dldENvbm5lY3Rpb25PZlRoZUNvbmNlcHQudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvQXBpL0dldFJlc2VydmVkSWRzLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0FwaS9SZWN1cnNpdmVTZWFyY2gudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvQmFzZVVybC50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9CaW5hcnlDaGFyYWN0ZXJUcmVlLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0JpbmFyeVRyZWUudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvQmluYXJ5VHlwZVRyZWUudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvQ2hhcmFjdGVyUmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9Db25jZXB0LnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb24udHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvQ29ubmVjdGlvbkJpbmFyeVRyZWUvQ29ubmVjdGlvbkJpbmFyeVRyZWUudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvQ29ubmVjdGlvbkJpbmFyeVRyZWUvQ29ubmVjdGlvbk5vZGUudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvQ29ubmVjdGlvbkJpbmFyeVRyZWUvQ29ubmVjdGlvblR5cGVUcmVlLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb25EYXRhLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0lkZW50aWZpZXJGbGFncy50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbEJpbmFyeUNoYXJhY3RlclRyZWUudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvTG9jYWwvTG9jYWxCaW5hcnlUcmVlLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0xvY2FsL0xvY2FsQmluYXJ5VHlwZVRyZWUudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvTG9jYWwvTG9jYWxDb25jZXB0RGF0YS50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbENvbm5lY3Rpb25EYXRhLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL05vZGUudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvUmVzZXJ2ZWRJZHMudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvUmV0dXJuZXIudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvU2VhcmNoUXVlcnkudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvU2V0dGluZ0RhdGEudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvU3luY0RhdGEudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvVGhlQ2hhcmFjdGVyLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL1RoZVRleHRzLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0RhdGFiYXNlL2luZGV4ZGJsb2NhbC50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9EYXRhYmFzZS9pbmRleGVkZGIudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvU2VydmljZXMvQ3JlYXRlQmluYXJ5VHJlZUZyb21EYXRhLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0NyZWF0ZUNvbm5lY3Rpb25CZXR3ZWVuVHdvQ29uY2VwdHMudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvU2VydmljZXMvQ3JlYXRlVGhlQ29tcG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvU2VydmljZXMvQ3JlYXRlVGhlQ29uY2VwdC50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9DcmVhdGVUaGVDb25uZWN0aW9uLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0RlbGV0ZUNvbmNlcHQudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvU2VydmljZXMvRGVsZXRlQ29ubmVjdGlvbi50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9HZXRDb21wb3NpdGlvbi50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9HZXRDb21wb3NpdGlvbkJ1bGsudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvU2VydmljZXMvR2V0Q29tcG9zaXRpb25MaXN0LnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0dldENvbmNlcHRCeUNoYXJhY3Rlci50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9HZXRDb25uZWN0aW9ucy50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9HZXREYXRhRnJvbUluZGV4RGIudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvU2VydmljZXMvR2V0TGluay50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9HZXRMaW5rZXJDb25uZWN0aW9uRnJvbUNvbmNlcHQudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvU2VydmljZXMvR2V0VGhlQ29uY2VwdC50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9HZXRUaGVSZWZlcmVudC50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9Jbml0aWFsaXplU3lzdGVtLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0xvY2FsL0NyZWF0ZUxvY2FsQmluYXJ5VHJlZUZyb21EYXRhLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0xvY2FsL0NyZWF0ZVRoZUNvbXBvc2l0aW9uTG9jYWwudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvU2VydmljZXMvTG9jYWwvQ3JlYXRlVGhlQ29uY2VwdExvY2FsLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0xvY2FsL0NyZWF0ZVRoZUNvbm5lY3Rpb25Mb2NhbC50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9Mb2NhbC9HZXRDb21wb3NpdGlvbkxpc3RMb2NhbC50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9Mb2NhbC9HZXRDb21wb3NpdGlvbkxvY2FsLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0xvY2FsL0dldENvbmNlcHRCeUNoYXJhY3RlckxvY2FsLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0xvY2FsL01ha2VUaGVDb25jZXB0TG9jYWwudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvU2VydmljZXMvTG9jYWwvTWFrZVRoZUluc3RhbmNlQ29uY2VwdExvY2FsLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0xvY2FsL01ha2VUaGVUeXBlTG9jYWwudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvU2VydmljZXMvTWFrZVRoZUNoYXJhY3Rlci50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9NYWtlVGhlQ2hhcmFjdGVyRGF0YS50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9NYWtlVGhlQ29uY2VwdC50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9NYWtlVGhlSW5zdGFuY2VDb25jZXB0LnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL1NlcnZpY2VzL01ha2VUaGVOYW1lLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL1NlcnZpY2VzL01ha2VUaGVUaW1lc3RhbXAudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvU2VydmljZXMvTWFrZVRoZVR5cGVDb25jZXB0LnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL1NlcnZpY2VzL1NwbGl0U3RyaW5ncy50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vdHNjY3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHNjY3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RzY2NzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHNjY3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90c2Njcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RzY2NzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90c2Njcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ0c2Njc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0c2Njc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ0c2Njc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENoYXJhY3RlclJlcG9zaXRvcnkgfSBmcm9tIFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvQ2hhcmFjdGVyUmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgUmV0dXJuZXIgfSBmcm9tIFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvUmV0dXJuZXJcIjtcbmltcG9ydCB7IFRoZUNoYXJhY3RlciB9IGZyb20gXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9UaGVDaGFyYWN0ZXJcIjtcbmltcG9ydCB7IEJhc2VVcmwgfSBmcm9tIFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvQmFzZVVybFwiO1xuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVRoZUNoYXJhY3RlcihjaGFyYWN0ZXJEYXRhKSB7XG4gICAgdmFyIGNoYXJhY3RlckRhdGE7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoYXJhY3RlckRhdGEgPSBDaGFyYWN0ZXJSZXBvc2l0b3J5LkdldENoYXJhY3RlcihjaGFyYWN0ZXJEYXRhLmRhdGEpO1xuICAgICAgICAgICAgaWYgKGNoYXJhY3RlckRhdGEuaWQgPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goQmFzZVVybC5DcmVhdGVUaGVDaGFyYWN0ZXJEYXRhVXJsKCksIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2hhcmFjdGVyRGF0YSksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRTdHJpbmcgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0U3RyaW5nO1xuICAgICAgICAgICAgICAgIHZhciBzYXZpbmdDaGFyYWN0ZXIgPSBuZXcgVGhlQ2hhcmFjdGVyKHJlc3VsdC51c2VySWQsIGNoYXJhY3RlckRhdGEuZGF0YSwgMCwgMCwgNCwgNCwgOTk5LCA5OTksIFwiXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzYXZpbmdDaGFyYWN0ZXIuaWQgPSByZXN1bHQuaWQ7XG4gICAgICAgICAgICAgICAgQ2hhcmFjdGVyUmVwb3NpdG9yeS5BZGRDaGFyYWN0ZXIoc2F2aW5nQ2hhcmFjdGVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldHVybmluZ0RhdGEgPSBuZXcgUmV0dXJuZXIoY2hhcmFjdGVyRGF0YS5pZCwgY2hhcmFjdGVyRGF0YS51c2VySWQsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuaW5nRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEJhc2VVcmwgfSBmcm9tIFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvQmFzZVVybFwiO1xuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVRoZUNvbmNlcHRBcGkoY29uY2VwdERhdGEpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChCYXNlVXJsLkNyZWF0ZVRoZUNvbmNlcHRVcmwoKSwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29uY2VwdERhdGEpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFN0cmluZyA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3VsdFN0cmluZztcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBCYXNlVXJsIH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0Jhc2VVcmxcIjtcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVUaGVDb25uZWN0aW9uQXBpKGNvbm5lY3Rpb25EYXRhKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KGNvbm5lY3Rpb25EYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goQmFzZVVybC5DcmVhdGVUaGVDb25uZWN0aW9uVXJsKCksIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IGpzb25EYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEJhc2VVcmwgfSBmcm9tIFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvQmFzZVVybFwiO1xuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVRleHREYXRhKHRleHREYXRhKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goQmFzZVVybC5DcmVhdGVUaGVUZXh0RGF0YVVybCgpLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0ZXh0RGF0YSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0U3RyaW5nID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0U3RyaW5nO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEJhc2VVcmwgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQmFzZVVybFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsZXRlVGhlQ29uY2VwdChpZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEJhc2VVcmwuRGVsZXRlQ29uY2VwdFVybCgpLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IGBpZD0ke2lkfWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBCYXNlVXJsIH0gZnJvbSAnLi4vRGF0YVN0cnVjdHVyZXMvQmFzZVVybCc7XG5pbXBvcnQgeyBDb25jZXB0c0RhdGEgfSBmcm9tICcuLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YSc7XG5pbXBvcnQgeyBQdXJnYXRvcnlEYXRhYmFzZVVwZGF0ZWQgfSBmcm9tICcuLi9TZXJ2aWNlcy9Jbml0aWFsaXplU3lzdGVtJztcbmV4cG9ydCBmdW5jdGlvbiBHZXRBaURhdGEoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEJhc2VVcmwuR2V0QWxsQWlEYXRhKCksIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIENvbmNlcHRzRGF0YS5BZGRDb25jZXB0VG9TdG9yYWdlKHJlc3VsdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdvdCBhbGwgdGhlIGNvbmNlcHRzIGRhdGEgZnJvbSBhaVwiKTtcbiAgICAgICAgICAgIFB1cmdhdG9yeURhdGFiYXNlVXBkYXRlZCgpO1xuICAgICAgICAgICAgbGV0IGVsYXBzZWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgdGltZSB0YWtlbiBpcyBcIiwgZWxhcHNlZCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDb25jZXB0c0RhdGEgfSBmcm9tIFwiLi8uLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YVwiO1xuaW1wb3J0IHsgQmFzZVVybCB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9CYXNlVXJsXCI7XG5leHBvcnQgZnVuY3Rpb24gR2V0QWxsQ29uY2VwdHNCeVR5cGUodHlwZSwgdXNlcklkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB1cmxlbmNvZGVkID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICAgICAgdXJsZW5jb2RlZC5hcHBlbmQoXCJ0eXBlXCIsIHR5cGUpO1xuICAgICAgICAgICAgdXJsZW5jb2RlZC5hcHBlbmQoXCJ1c2VyX2lkXCIsIHVzZXJJZC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goQmFzZVVybC5HZXRBbGxDb25jZXB0c0J5VHlwZVVybCgpLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IHVybGVuY29kZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIENvbmNlcHRzRGF0YS5BZGRDb25jZXB0KHJlc3VsdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQ29ubmVjdGlvbkRhdGEgfSBmcm9tICcuLi9EYXRhU3RydWN0dXJlcy9Db25uZWN0aW9uRGF0YSc7XG5pbXBvcnQgeyBCYXNlVXJsIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Jhc2VVcmxcIjtcbmV4cG9ydCBmdW5jdGlvbiBHZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb24oY29tcG9zaXRpb25faWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY29ubmVjdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgY29ubmVjdGlvbkxpc3QgPSB5aWVsZCBDb25uZWN0aW9uRGF0YS5HZXRDb25uZWN0aW9uc09mQ29tcG9zaXRpb25Mb2NhbChjb21wb3NpdGlvbl9pZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgY29ubmVjdGlvbiBsaXN0IGZyb20gbG9jYWxcIiwgY29ubmVjdGlvbkxpc3QpO1xuICAgICAgICBpZiAoY29ubmVjdGlvbkxpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uTGlzdFN0cmluZyA9IHlpZWxkIEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbk9ubGluZShjb21wb3NpdGlvbl9pZCk7XG4gICAgICAgICAgICBjb25uZWN0aW9uTGlzdCA9IGNvbm5lY3Rpb25MaXN0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJub3Qgd2FpdGluZyBmb3IgdGhpc1wiKTtcbiAgICAgICAgICAgIEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbk9ubGluZShjb21wb3NpdGlvbl9pZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZvcndhcmQgZnJvbSB0aGlzXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25uZWN0aW9uTGlzdDtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBHZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb25PbmxpbmUoY29tcG9zaXRpb25faWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb25MaXN0ID0gW107XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEJhc2VVcmwuR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uVXJsKCksIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogYGNvbXBvc2l0aW9uX2lkPSR7Y29tcG9zaXRpb25faWR9YFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid2FpdGluZyBhbmQgd2F0Y2hpbmdcIik7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIENvbm5lY3Rpb25EYXRhLkFkZENvbm5lY3Rpb24ocmVzdWx0W2ldKTtcbiAgICAgICAgICAgICAgICAvLyBDb25uZWN0aW9uRGF0YS5BZGRUb0RpY3Rpb25hcnkocmVzdWx0W2ldKTtcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uTGlzdC5wdXNoKHJlc3VsdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29ubmVjdGlvbkxpc3Q7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDb25uZWN0aW9uRGF0YSB9IGZyb20gJy4uL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb25EYXRhJztcbmltcG9ydCB7IEJhc2VVcmwgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQmFzZVVybFwiO1xuaW1wb3J0IHsgR2V0Q29uY2VwdEJ1bGsgfSBmcm9tICcuL0dldENvbmNlcHRCdWxrJztcbmV4cG9ydCBmdW5jdGlvbiBHZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb25CdWxrKGNvbXBvc2l0aW9uX2lkcyA9IFtdKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25MaXN0ID0gW107XG4gICAgICAgIHZhciBjb25jZXB0TGlzdCA9IFtdO1xuICAgICAgICB2YXIgY29ubmVjdGlvbkxpc3RTdHJpbmcgPSB5aWVsZCBHZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb25PbmxpbmUoY29tcG9zaXRpb25faWRzKTtcbiAgICAgICAgY29ubmVjdGlvbkxpc3QgPSBjb25uZWN0aW9uTGlzdFN0cmluZztcbiAgICAgICAgaWYgKGNvbm5lY3Rpb25MaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29ubmVjdGlvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmNlcHRMaXN0LmluY2x1ZGVzKGNvbm5lY3Rpb25MaXN0W2ldLm9mVGhlQ29uY2VwdElkKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25jZXB0TGlzdC5wdXNoKGNvbm5lY3Rpb25MaXN0W2ldLm9mVGhlQ29uY2VwdElkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjb25jZXB0TGlzdC5pbmNsdWRlcyhjb25uZWN0aW9uTGlzdFtpXS50b1RoZUNvbmNlcHRJZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uY2VwdExpc3QucHVzaChjb25uZWN0aW9uTGlzdFtpXS50b1RoZUNvbmNlcHRJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeWllbGQgR2V0Q29uY2VwdEJ1bGsoY29uY2VwdExpc3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25uZWN0aW9uTGlzdDtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBHZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb25PbmxpbmUoY29tcG9zaXRpb25faWRzID0gW10pIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb25MaXN0ID0gW107XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEJhc2VVcmwuR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uQnVsa1VybCgpLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb21wb3NpdGlvbl9pZHMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBDb25uZWN0aW9uRGF0YS5BZGRDb25uZWN0aW9uKHJlc3VsdFtpXSk7XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbkxpc3QucHVzaChyZXN1bHRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb25MaXN0O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQmFzZVVybCB9IGZyb20gXCIuLi9hcHBcIjtcbmV4cG9ydCBmdW5jdGlvbiBHZXRBbGxMaW5rZXJDb25uZWN0aW9uc0Zyb21UaGVDb25jZXB0KGNvbmNlcHRJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEJhc2VVcmwuR2V0QWxsTGlua2VyQ29ubmVjdGlvbk9mQ29uY2VwdFVybCgpICsgYD9jb25jZXB0SWQ9JHtjb25jZXB0SWR9YCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSByZXN1bHRbaV07XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbnMucHVzaChjb25uZWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25uZWN0aW9ucztcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENvbmNlcHRzRGF0YSB9IGZyb20gXCIuLy4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhXCI7XG5pbXBvcnQgeyBCYXNlVXJsIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Jhc2VVcmxcIjtcbmV4cG9ydCBmdW5jdGlvbiBHZXRDb25jZXB0KGlkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBjb25jZXB0VXNlID0geWllbGQgQ29uY2VwdHNEYXRhLkdldENvbmNlcHQoaWQpO1xuICAgICAgICAgICAgaWYgKGNvbmNlcHRVc2UuaWQgIT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25jZXB0VXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChCYXNlVXJsLkdldENvbmNlcHRVcmwoKSwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGBpZD0ke2lkfWBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmlkID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBDb25jZXB0c0RhdGEuQWRkQ29uY2VwdChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENvbmNlcHRzRGF0YSB9IGZyb20gXCIuLy4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhXCI7XG5pbXBvcnQgeyBCYXNlVXJsIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Jhc2VVcmxcIjtcbmV4cG9ydCBmdW5jdGlvbiBHZXRDb25jZXB0QnVsayhjb25jZXB0SWRzKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBidWxrQ29uY2VwdEZldGNoID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmNlcHRJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY29uY2VwdFVzZSA9IHlpZWxkIENvbmNlcHRzRGF0YS5HZXRDb25jZXB0KGNvbmNlcHRJZHNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChjb25jZXB0VXNlLmlkID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYnVsa0NvbmNlcHRGZXRjaC5wdXNoKGNvbmNlcHRJZHNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChidWxrQ29uY2VwdEZldGNoLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1bGtDb25jZXB0RmV0Y2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEJhc2VVcmwuR2V0Q29uY2VwdEJ1bGtVcmwoKSwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShidWxrQ29uY2VwdEZldGNoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbmNlcHQgPSByZXN1bHRbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25jZXB0c0RhdGEuQWRkQ29uY2VwdChjb25jZXB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQ29uY2VwdHNEYXRhIH0gZnJvbSBcIi4vLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdERhdGFcIjtcbmltcG9ydCB7IEJhc2VVcmwgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQmFzZVVybFwiO1xuZXhwb3J0IGZ1bmN0aW9uIEdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGUoY2hhcmFjdGVyVmFsdWUsIHR5cGVJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdCA9IHlpZWxkIENvbmNlcHRzRGF0YS5HZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlTG9jYWwoY2hhcmFjdGVyVmFsdWUsIHR5cGVJZCk7XG4gICAgICAgICAgICBpZiAoY29uY2VwdCA9PSBudWxsIHx8IGNvbmNlcHQuaWQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBqc29uID0ge1xuICAgICAgICAgICAgICAgICAgICAnY2hhcmFjdGVyX3ZhbHVlJzogYCR7Y2hhcmFjdGVyVmFsdWV9YCxcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGVfaWQnOiB0eXBlSWRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciB0b1NlbmRKc29uID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChCYXNlVXJsLkdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGVVcmwoKSwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogdG9TZW5kSnNvbixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgIENvbmNlcHRzRGF0YS5BZGRDb25jZXB0KGNvbmNlcHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDb25jZXB0c0RhdGEgfSBmcm9tIFwiLi8uLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YVwiO1xuaW1wb3J0IHsgQmFzZVVybCB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9CYXNlVXJsXCI7XG5leHBvcnQgZnVuY3Rpb24gR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyVmFsdWUoY2hhcmFjdGVyVmFsdWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChCYXNlVXJsLkdldENvbmNlcHRCeUNoYXJhY3RlclZhbHVlVXJsKCksIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogYGNoYXJhY3Rlcl92YWx1ZT0ke2NoYXJhY3RlclZhbHVlfWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pZCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgQ29uY2VwdHNEYXRhLkFkZENvbmNlcHQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBCYXNlVXJsIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Jhc2VVcmxcIjtcbmltcG9ydCB7IENvbm5lY3Rpb25EYXRhIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb25EYXRhXCI7XG5leHBvcnQgZnVuY3Rpb24gR2V0Q29ubmVjdGlvbihpZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvblVzZSA9IHlpZWxkIENvbm5lY3Rpb25EYXRhLkdldENvbm5lY3Rpb24oaWQpO1xuICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb25Vc2UuaWQgIT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25uZWN0aW9uVXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXR0aW5nIGNvbm5lY3Rpb24gZnJvbSBvbmxpbmVcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChCYXNlVXJsLkdldENvbm5lY3Rpb25VcmwoKSwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGBpZD0ke2lkfWBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBDb25uZWN0aW9uRGF0YS5BZGRDb25uZWN0aW9uKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBjb25uZWN0aW9uIGFkZGVkXCIsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEJhc2VVcmwgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQmFzZVVybFwiO1xuZXhwb3J0IGZ1bmN0aW9uIEdldENvbm5lY3Rpb25PZlRoZUNvbmNlcHQodHlwZUlkLCBvZlRoZUNvbmNlcHRJZCwgdXNlcklkLCBpbnBhZ2UgPSAxMCwgcGFnZSA9IDEpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHVybGVuY29kZWQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgICAgICB1cmxlbmNvZGVkLmFwcGVuZChcInR5cGVJZFwiLCBgJHt0eXBlSWR9YCk7XG4gICAgICAgICAgICB1cmxlbmNvZGVkLmFwcGVuZChcIm9mVGhlQ29uY2VwdElkXCIsIGAke29mVGhlQ29uY2VwdElkfWApO1xuICAgICAgICAgICAgdXJsZW5jb2RlZC5hcHBlbmQoXCJ1c2VySWRcIiwgYCR7dXNlcklkfWApO1xuICAgICAgICAgICAgdXJsZW5jb2RlZC5hcHBlbmQoXCJpbnBhZ2VcIiwgYCR7aW5wYWdlfWApO1xuICAgICAgICAgICAgdXJsZW5jb2RlZC5hcHBlbmQoXCJwYWdlXCIsIGAke3BhZ2V9YCk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEJhc2VVcmwuR2V0QWxsQ29ubmVjdGlvbnNPZkNvbmNlcHRVcmwoKSwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiB1cmxlbmNvZGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IFJlc2VydmVkSWRzIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL1Jlc2VydmVkSWRzXCI7XG5pbXBvcnQgeyBCYXNlVXJsIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Jhc2VVcmxcIjtcbmV4cG9ydCBmdW5jdGlvbiBHZXRSZXNlcnZlZElkcygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChCYXNlVXJsLkdldFJlc2VydmVkSWRVcmwoKSwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgUmVzZXJ2ZWRJZHMuQWRkSWQocmVzdWx0W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEJhc2VVcmwgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQmFzZVVybFwiO1xuaW1wb3J0IHsgU2VhcmNoUXVlcnkgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvU2VhcmNoUXVlcnlcIjtcbmltcG9ydCB7IEdldENvbXBvc2l0aW9uQnVsa1dpdGhEYXRhSWQgfSBmcm9tIFwiLi4vU2VydmljZXMvR2V0Q29tcG9zaXRpb25CdWxrXCI7XG5leHBvcnQgZnVuY3Rpb24gUmVjdXJzaXZlU2VhcmNoQXBpKGNvbXBvc2l0aW9uID0gMCwgbGlzdExpbmtlcnMgPSBbXSwgdGV4dFNlYXJjaCA9IFwiXCIpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHNlYXJjaFF1ZXJ5ID0gbmV3IFNlYXJjaFF1ZXJ5KCk7XG4gICAgICAgICAgICBzZWFyY2hRdWVyeS5jb21wb3NpdGlvbiA9IGNvbXBvc2l0aW9uO1xuICAgICAgICAgICAgc2VhcmNoUXVlcnkubGlzdExpbmtlcnMgPSBsaXN0TGlua2VycztcbiAgICAgICAgICAgIHNlYXJjaFF1ZXJ5LnRleHRTZWFyY2ggPSB0ZXh0U2VhcmNoO1xuICAgICAgICAgICAgdmFyIHJhdyA9IEpTT04uc3RyaW5naWZ5KHNlYXJjaFF1ZXJ5KTtcbiAgICAgICAgICAgIHZhciBDb25uZWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgdmFyIG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgICAgICBteUhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgICAgIG15SGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIGV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYm1seGRXVmZibUZ0WlNJNklqRXdNalkzSWl3aVpXMWhhV3dpT2lKdWFYTmpZV3hpYUdGdVpHRnlhVEV5UUdkdFlXbHNMbU52YlNJc0luVndiaUk2SWpFd01ERXlPRE01TWlJc0luQnlhVzFoY25semFXUWlPaUl4TURBeU1EY3hNVEFpTENKdVltWWlPakUzTURVeU1qQXhOVE1zSW1WNGNDSTZNVGN3TlRNd05qVTFNeXdpYVdGMElqb3hOekExTWpJd01Ea3pmUS42MFVtS0RnZkdwRXRXWFdCa2RDVGhuSVdlaGdzRFpWam4xU3JqcVJYSTJZXCIpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChCYXNlVXJsLlJlY3Vyc2l2ZVNlYXJjaFVybCgpLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogbXlIZWFkZXJzLFxuICAgICAgICAgICAgICAgIGJvZHk6IHJhd1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHZhciBjb25jZXB0SWRzID0gcmVzdWx0LmNvbXBvc2l0aW9uSWRzO1xuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb25zID0gcmVzdWx0LmNvbm5lY3Rpb25zO1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRzID0gW107XG4gICAgICAgICAgICBjb25jZXB0cyA9IHlpZWxkIEdldENvbXBvc2l0aW9uQnVsa1dpdGhEYXRhSWQoY29uY2VwdElkcyk7XG4gICAgICAgICAgICByZXR1cm4gY29uY2VwdHM7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiZXhwb3J0IGNsYXNzIEJhc2VVcmwge1xuICAgIC8vIHN0YXRpYyBHZXRDb25jZXB0VXJsOnN0cmluZyA9IHRoaXMuQkFTRV9VUkwgKyAnL2FwaS9nZXRDb25jZXB0JztcbiAgICBzdGF0aWMgR2V0Q29uY2VwdFVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQkFTRV9VUkwgKyAnL2FwaS9nZXRDb25jZXB0JztcbiAgICB9XG4gICAgc3RhdGljIEdldENvbm5lY3Rpb25VcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLkJBU0VfVVJMICsgJy9hcGkvZ2V0LWNvbm5lY3Rpb24tYnktaWQnO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0Q29uY2VwdEJ1bGtVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLkJBU0VfVVJMICsgJy9hcGkvZ2V0X2NvbmNlcHRfYnVsayc7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRBbGxDb25jZXB0c09mVXNlclVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQkFTRV9VUkwgKyAnL2FwaS9nZXRfYWxsX2NvbmNlcHRzX29mX3VzZXInO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0QWxsQ29ubmVjdGlvbnNPZlVzZXJVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLkJBU0VfVVJMICsgJy9hcGkvZ2V0X2FsbF9jb25uZWN0aW9uc19vZl91c2VyJztcbiAgICB9XG4gICAgc3RhdGljIEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvblVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQkFTRV9VUkwgKyAnL2FwaS9nZXRfYWxsX2Nvbm5lY3Rpb25zX29mX2NvbXBvc2l0aW9uJztcbiAgICB9XG4gICAgc3RhdGljIEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbkJ1bGtVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLkJBU0VfVVJMICsgJy9hcGkvZ2V0X2FsbF9jb25uZWN0aW9uc19vZl9jb21wb3NpdGlvbl9idWxrJztcbiAgICB9XG4gICAgc3RhdGljIEdldENvbmNlcHRCeUNoYXJhY3RlclZhbHVlVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5CQVNFX1VSTCArICcvYXBpL2dldF9jb25jZXB0X2J5X2NoYXJhY3Rlcl92YWx1ZSc7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5CQVNFX1VSTCArICcvYXBpL2dldF9jb25jZXB0X2J5X2NoYXJhY3Rlcl9hbmRfdHlwZSc7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDaGFyYWN0ZXJCeUNoYXJhY3RlclVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQkFTRV9VUkwgKyAnL2FwaS9nZXRfY2hhcmFjdGVyX2J5X2NoYXJhY3Rlcic7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRBbGxDb25jZXB0c0J5VHlwZVVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQkFTRV9VUkwgKyAnL2FwaS9nZXRfYWxsX2NvbmNlcHRzX2J5X3R5cGUnO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0QWxsQ29ubmVjdGlvbnNPZkNvbmNlcHRVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLkJBU0VfVVJMICsgJy9hcGkvZ2V0LWxpbmstY29ubmVjdGlvbnMnO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0QWxsQWlEYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5BSV9VUkwgKyAnL2FwaS9nZXRfcmFua2VkX3R5cGVfaWQ/aW5wYWdlPTMwMCcgfHwgcHJvY2Vzcy5lbnYuQUlfVVJMIHx8ICdodHRwczovL2FpLmZyZWVzY2hlbWEuY29tL2FwaS9nZXRfcmFua2VkX3R5cGVfaWQ/aW5wYWdlPTUwMCc7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRBbGxQcmVmZXRjaENvbm5lY3Rpb25zVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5CQVNFX1VSTCArICcvYXBpL2dldF9hbGxfY29ubmVjdGlvbnNfb2ZfdXNlcj9pbnBhZ2U9NTAwJztcbiAgICB9XG4gICAgc3RhdGljIEdldEFsbExpbmtlckNvbm5lY3Rpb25PZkNvbmNlcHRVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLkJBU0VfVVJMICsgJy9hcGkvZ2V0LWFsbC1saW5rZXJzLWZyb20tY29uY2VwdCc7XG4gICAgfVxuICAgIHN0YXRpYyBEZWxldGVDb25jZXB0VXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5CQVNFX1VSTCArICcvYXBpL2RlbGV0ZV9jb25jZXB0JztcbiAgICB9XG4gICAgc3RhdGljIFJlY3Vyc2l2ZVNlYXJjaFVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQkFTRV9VUkwgKyAnL2FwaS9yZWN1cnNpdmVzZWFyY2gtY29uY2VwdC1jb25uZWN0aW9uJztcbiAgICB9XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLyBBUEkgRm9yIFJlc2VydmVkIElkcyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBzdGF0aWMgR2V0UmVzZXJ2ZWRJZFVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQkFTRV9VUkwgKyAnL2FwaS9nZXRfcmVzZXJ2ZWRfaWRzJztcbiAgICB9XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vQVBJIEZvciBDcmVhdGluZyBEYXRhIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgc3RhdGljIENyZWF0ZVRoZVRleHREYXRhVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5CQVNFX1VSTCArICcvYXBpL2NyZWF0ZV90ZXh0X2RhdGEnO1xuICAgIH1cbiAgICBzdGF0aWMgQ3JlYXRlVGhlQ2hhcmFjdGVyRGF0YVVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQkFTRV9VUkwgKyAnL2FwaS9jcmVhdGVfY2hhcmFjdGVyX2RhdGEnO1xuICAgIH1cbiAgICBzdGF0aWMgQ3JlYXRlVGhlQ29uY2VwdFVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQkFTRV9VUkwgKyAnL2FwaS9jcmVhdGVfdGhlX2NvbmNlcHQnO1xuICAgIH1cbiAgICBzdGF0aWMgQ3JlYXRlVGhlQ29ubmVjdGlvblVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQkFTRV9VUkwgKyAnL2FwaS9jcmVhdGVfdGhlX2Nvbm5lY3Rpb24nO1xuICAgIH1cbn1cbkJhc2VVcmwuQkFTRV9VUkwgPSBcIlwiO1xuQmFzZVVybC5BSV9VUkwgPSBcImh0dHBzOi8vYWkuZnJlZXNjaGVtYS5jb21cIjtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgSWRlbnRpZmllckZsYWdzIH0gZnJvbSBcIi4vSWRlbnRpZmllckZsYWdzXCI7XG5pbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vTm9kZVwiO1xuZXhwb3J0IGNsYXNzIEJpbmFyeUNoYXJhY3RlclRyZWUge1xuICAgIHN0YXRpYyB3YWl0Rm9yRGF0YVRvTG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZsYWcocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIm5vdFwiKTtcbiAgICAgICAgICAgICAgICB9LCAyNTAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja0ZsYWcocmVzb2x2ZSkge1xuICAgICAgICBpZiAoSWRlbnRpZmllckZsYWdzLmlzQ2hhcmFjdGVyTG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShcImRvbmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KEJpbmFyeUNoYXJhY3RlclRyZWUuY2hlY2tGbGFnLCAxMDAwLCByZXNvbHZlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgc3RhdGljIGFkZE5vZGVUb1RyZWUobm9kZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyUm9vdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJSb290ID0gbm9kZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXJSb290O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJSb290ID0gdGhpcy5jaGFyYWN0ZXJSb290LmFkZENoYXJhY3Rlck5vZGUobm9kZSwgdGhpcy5jaGFyYWN0ZXJSb290LCB0aGlzLmNoYXJhY3RlclJvb3QuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYXJhY3RlclJvb3Q7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgcmVtb3ZlTm9kZUJ5Q2hhcmFjdGVyKGNoYXJhY3RlciwgaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYXJhY3RlclJvb3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlclJvb3QucmVtb3ZlTm9kZVdpdGhWYXJpYW50cyh0aGlzLmNoYXJhY3RlclJvb3QsIGNoYXJhY3RlciwgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGNvdW50TnVtYmVyT2ZOb2RlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyUm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhcmFjdGVyUm9vdC5jb3VudE5vZGVCZWxvdyh0aGlzLmNoYXJhY3RlclJvb3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBzdGF0aWMgYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KSB7XG4gICAgICAgIGlmIChjb25jZXB0LmNoYXJhY3RlclZhbHVlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IE5vZGUoY29uY2VwdC5jaGFyYWN0ZXJWYWx1ZSwgY29uY2VwdCwgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLmFkZE5vZGVUb1RyZWUobm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGdldE5vZGVGcm9tVHJlZSh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXJSb290KSB7XG4gICAgICAgICAgICB2YXIgTm9kZSA9IHRoaXMuY2hhcmFjdGVyUm9vdC5nZXRDaGFyYWN0ZXJGcm9tTm9kZSh2YWx1ZSwgdGhpcy5jaGFyYWN0ZXJSb290KTtcbiAgICAgICAgICAgIHJldHVybiBOb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJhY3RlclJvb3Q7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRDaGFyYWN0ZXJBbmRUeXBlRnJvbVRyZWUodmFsdWUsIHR5cGVJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHlpZWxkIHRoaXMud2FpdEZvckRhdGFUb0xvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNoYXJhY3RlclJvb3QpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlYXJjaGluZyAuLi4uLi4uLi4uLi4uLi4uLlwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIE5vZGUgPSB0aGlzLmNoYXJhY3RlclJvb3QuZ2V0RnJvbU5vZGVXaXRoQ2hhcmFjdGVyQW5kVHlwZSh2YWx1ZSwgdHlwZUlkLCB0aGlzLmNoYXJhY3RlclJvb3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiBOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhcmFjdGVyUm9vdDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyByZW1vdmVDb25jZXB0Q2hhcmFjdGVyKGlkKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3RlclJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyUm9vdCA9IHRoaXMuY2hhcmFjdGVyUm9vdC5yZW1vdmVOb2RlKHRoaXMuY2hhcmFjdGVyUm9vdCwgaWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuQmluYXJ5Q2hhcmFjdGVyVHJlZS5jaGFyYWN0ZXJSb290ID0gbnVsbDtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQmluYXJ5Q2hhcmFjdGVyVHJlZSB9IGZyb20gXCIuL0JpbmFyeUNoYXJhY3RlclRyZWVcIjtcbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9Ob2RlXCI7XG5pbXBvcnQgeyBJZGVudGlmaWVyRmxhZ3MgfSBmcm9tIFwiLi9JZGVudGlmaWVyRmxhZ3NcIjtcbmV4cG9ydCBjbGFzcyBCaW5hcnlUcmVlIHtcbiAgICBzdGF0aWMgYWRkTm9kZVRvVHJlZShub2RlKSB7XG4gICAgICAgIGlmICh0aGlzLnJvb3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yb290ID0gbm9kZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvb3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSB0aGlzLnJvb3QuYWRkTm9kZShub2RlLCB0aGlzLnJvb3QsIHRoaXMucm9vdC5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyB3YWl0Rm9yRGF0YVRvTG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZsYWcocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIm5vdFwiKTtcbiAgICAgICAgICAgICAgICB9LCAyNTAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja0ZsYWcocmVzb2x2ZSkge1xuICAgICAgICBpZiAoSWRlbnRpZmllckZsYWdzLmlzRGF0YUxvYWRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoXCJkb25lXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChCaW5hcnlUcmVlLmNoZWNrRmxhZywgMTAwMCwgcmVzb2x2ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIHN0YXRpYyBhZGRDb25jZXB0VG9UcmVlKGNvbmNlcHQpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgTm9kZShjb25jZXB0LmlkLCBjb25jZXB0LCBudWxsLCBudWxsKTtcbiAgICAgICAgdmFyIGNoYXJhY3Rlck5vZGUgPSBuZXcgTm9kZShjb25jZXB0LmNoYXJhY3RlclZhbHVlLCBjb25jZXB0LCBudWxsLCBudWxsKTtcbiAgICAgICAgQmluYXJ5Q2hhcmFjdGVyVHJlZS5hZGROb2RlVG9UcmVlKGNoYXJhY3Rlck5vZGUpO1xuICAgICAgICB0aGlzLmFkZE5vZGVUb1RyZWUobm9kZSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXROb2RlRnJvbVRyZWUoaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB5aWVsZCB0aGlzLndhaXRGb3JEYXRhVG9Mb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICAgICAgICAgICAgdmFyIE5vZGUgPSB0aGlzLnJvb3QuZ2V0RnJvbU5vZGUoaWQsIHRoaXMucm9vdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyByZW1vdmVOb2RlRnJvbVRyZWUoaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3QgPSB0aGlzLnJvb3QucmVtb3ZlTm9kZSh0aGlzLnJvb3QsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBjb3VudE51bWJlck9mTm9kZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvb3QuY291bnROb2RlQmVsb3codGhpcy5yb290KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59XG5CaW5hcnlUcmVlLnJvb3QgPSBudWxsO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDb25jZXB0IH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHRcIjtcbmltcG9ydCB7IElkZW50aWZpZXJGbGFncyB9IGZyb20gXCIuL0lkZW50aWZpZXJGbGFnc1wiO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL05vZGVcIjtcbmV4cG9ydCBjbGFzcyBCaW5hcnlUeXBlVHJlZSB7XG4gICAgc3RhdGljIGFkZE5vZGVUb1RyZWUobm9kZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudHlwZVJvb3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHlwZVJvb3QgPSBub2RlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGVSb290O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlUm9vdCA9IHRoaXMudHlwZVJvb3QuYWRkVHlwZU5vZGUobm9kZSwgdGhpcy50eXBlUm9vdCwgdGhpcy50eXBlUm9vdC5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHlwZVJvb3Q7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KSB7XG4gICAgICAgIGlmIChjb25jZXB0LnR5cGVJZCAhPSAwKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBOb2RlKGNvbmNlcHQudHlwZUlkLCBjb25jZXB0LCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTm9kZVRvVHJlZShub2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgcmVtb3ZlVHlwZUNvbmNlcHQodHlwZUlkLCBpZCkge1xuICAgICAgICBpZiAodGhpcy50eXBlUm9vdCkge1xuICAgICAgICAgICAgdGhpcy50eXBlUm9vdCA9IHRoaXMudHlwZVJvb3QucmVtb3ZlTm9kZVdpdGhWYXJpYW50cyh0aGlzLnR5cGVSb290LCB0eXBlSWQsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgZ2V0Tm9kZUZyb21UcmVlKGlkKSB7XG4gICAgICAgIGlmICh0aGlzLnR5cGVSb290KSB7XG4gICAgICAgICAgICB2YXIgTm9kZSA9IHRoaXMudHlwZVJvb3QuZ2V0RnJvbU5vZGUoaWQsIHRoaXMudHlwZVJvb3QpO1xuICAgICAgICAgICAgcmV0dXJuIE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZVJvb3Q7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRUeXBlVmFyaWFudHNGcm9tVHJlZSh0eXBlSWQpIHtcbiAgICAgICAgdmFyIE5vZGUgPSB0aGlzLmdldE5vZGVGcm9tVHJlZSh0eXBlSWQpO1xuICAgICAgICB2YXIgY29uY2VwdHMgPSBbXTtcbiAgICAgICAgaWYgKE5vZGUpIHtcbiAgICAgICAgICAgIGNvbmNlcHRzLnB1c2goTm9kZSA9PT0gbnVsbCB8fCBOb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBOb2RlLnZhbHVlKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTm9kZS52YXJpYW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbmNlcHRzLnB1c2goTm9kZS52YXJpYW50c1tpXS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29uY2VwdHM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIHdhaXRGb3JEYXRhVG9Mb2FkKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRmxhZyhyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwibm90XCIpO1xuICAgICAgICAgICAgICAgIH0sIDI1MDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGNoZWNrRmxhZyhyZXNvbHZlKSB7XG4gICAgICAgIGlmIChJZGVudGlmaWVyRmxhZ3MuaXNUeXBlTG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShcImRvbmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KEJpbmFyeVR5cGVUcmVlLmNoZWNrRmxhZywgMTAwMCwgcmVzb2x2ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIHN0YXRpYyBnZXRUeXBlVmFyaWFudHNGcm9tVHJlZVdpdGhVc2VySWQodHlwZUlkLCB1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHZhciBjb25jZXB0cyA9IFtdO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHlpZWxkIHRoaXMud2FpdEZvckRhdGFUb0xvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uY2VwdHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgTm9kZSA9IHRoaXMuZ2V0Tm9kZUZyb21UcmVlKHR5cGVJZCk7XG4gICAgICAgICAgICBpZiAoTm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChOb2RlLnZhbHVlLnVzZXJJZCA9PSB1c2VySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uY2VwdHMucHVzaChOb2RlID09PSBudWxsIHx8IE5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IE5vZGUudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5vZGUudmFyaWFudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE5vZGUudmFyaWFudHNbaV0udmFsdWUudXNlcklkID09IHVzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzUHJlc2VudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb25jZXB0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25jZXB0c1tqXS5pZCA9PSBOb2RlLnZhcmlhbnRzW2ldLnZhbHVlLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUHJlc2VudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ByZXNlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25jZXB0cy5wdXNoKE5vZGUudmFyaWFudHNbaV0udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbmNlcHRzO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGdldFR5cGVWYXJpYW50c1dpdGhDaGFyYWN0ZXJWYWx1ZShjaGFyYWN0ZXJWYWx1ZSwgdHlwZUlkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdCA9IG5ldyBDb25jZXB0KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIFwiMFwiLCAwLCAwLCAwLCAwLCAwLCAwLCBmYWxzZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0geWllbGQgdGhpcy53YWl0Rm9yRGF0YVRvTG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIE5vZGUgPSB0aGlzLmdldE5vZGVGcm9tVHJlZSh0eXBlSWQpO1xuICAgICAgICAgICAgaWYgKE5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoTm9kZS52YWx1ZS5jaGFyYWN0ZXJWYWx1ZSA9PSBjaGFyYWN0ZXJWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25jZXB0ID0gTm9kZS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOb2RlLnZhcmlhbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChOb2RlLnZhcmlhbnRzW2ldLnZhbHVlLmNoYXJhY3RlclZhbHVlID09IGNoYXJhY3RlclZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25jZXB0ID0gTm9kZS52YXJpYW50c1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGNvdW50TnVtYmVyT2ZOb2RlcygpIHtcbiAgICAgICAgaWYgKHRoaXMudHlwZVJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGVSb290LmNvdW50Tm9kZUJlbG93KHRoaXMudHlwZVJvb3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cbkJpbmFyeVR5cGVUcmVlLnR5cGVSb290ID0gbnVsbDtcbiIsImltcG9ydCB7IFRoZUNoYXJhY3RlciB9IGZyb20gXCIuL1RoZUNoYXJhY3RlclwiO1xuZXhwb3J0IGNsYXNzIENoYXJhY3RlclJlcG9zaXRvcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBcImNoYXJhY3RlciBSZXBvc2l0b3J5XCI7XG4gICAgfVxuICAgIHN0YXRpYyBBZGRDaGFyYWN0ZXIoY2hhcmFjdGVyKSB7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyRGF0YVtjaGFyYWN0ZXIuaWRdID0gY2hhcmFjdGVyO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0Q2hhcmFjdGVyKHZhbHVlKSB7XG4gICAgICAgIHZhciB0aGVDaGFyYWN0ZXIgPSBuZXcgVGhlQ2hhcmFjdGVyKDAsIFwiMFwiLCAwLCAwLCAwLCAwLCAwLCAwLCBcIjBcIiwgZmFsc2UpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hhcmFjdGVyRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyRGF0YVtpXS5kYXRhID09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhlQ2hhcmFjdGVyID0gdGhpcy5jaGFyYWN0ZXJEYXRhW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGVDaGFyYWN0ZXI7XG4gICAgfVxufVxuQ2hhcmFjdGVyUmVwb3NpdG9yeS5jaGFyYWN0ZXJEYXRhID0gW107XG4iLCJleHBvcnQgY2xhc3MgQ29uY2VwdCB7XG4gICAgY29uc3RydWN0b3IoaWQsIHVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCBjYXRlZ29yeUlkLCBjYXRlZ29yeVVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIGNoYXJhY3RlclZhbHVlLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkLCBpc05ldyA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaXNUZW1wID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHRoaXMudHlwZUlkID0gdHlwZUlkO1xuICAgICAgICB0aGlzLnR5cGVVc2VySWQgPSB0eXBlVXNlcklkO1xuICAgICAgICB0aGlzLmNhdGVnb3J5SWQgPSBjYXRlZ29yeUlkO1xuICAgICAgICB0aGlzLmNhdGVnb3J5VXNlcklkID0gY2F0ZWdvcnlVc2VySWQ7XG4gICAgICAgIHRoaXMucmVmZXJlbnRJZCA9IHJlZmVyZW50SWQ7XG4gICAgICAgIHRoaXMucmVmZXJlbnQgPSByZWZlcmVudElkO1xuICAgICAgICB0aGlzLnJlZmVyZW50VXNlcklkID0gcmVmZXJlbnRVc2VySWQ7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyVmFsdWUgPSBgJHtjaGFyYWN0ZXJWYWx1ZX1gO1xuICAgICAgICB0aGlzLnNlY3VyaXR5SWQgPSBzZWN1cml0eUlkO1xuICAgICAgICB0aGlzLnNlY3VyaXR5VXNlcklkID0gc2VjdXJpdHlVc2VySWQ7XG4gICAgICAgIHRoaXMuYWNjZXNzSWQgPSBhY2Nlc3NJZDtcbiAgICAgICAgdGhpcy5hY2Nlc3NVc2VySWQgPSBhY2Nlc3NVc2VySWQ7XG4gICAgICAgIHRoaXMuc2Vzc2lvbklkID0gc2Vzc2lvbklkO1xuICAgICAgICB0aGlzLnNlc3Npb25Vc2VySWQgPSBzZXNzaW9uVXNlcklkO1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLnR5cGUgPSBudWxsO1xuICAgICAgICB0aGlzLmlzTmV3ID0gaXNOZXc7XG4gICAgICAgIC8vIENvbmNlcHRzRGF0YS5BZGRDb25jZXB0KHRoaXMpO1xuICAgIH1cbiAgICBnZXRUeXBlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnR5cGVJZCk7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDb25jZXB0IH0gZnJvbSBcIi4vQ29uY2VwdFwiO1xuaW1wb3J0IHsgcmVtb3ZlRnJvbURhdGFiYXNlLCBzdG9yZVRvRGF0YWJhc2UgfSBmcm9tIFwiLi4vRGF0YWJhc2UvaW5kZXhlZGRiXCI7XG5pbXBvcnQgeyBCaW5hcnlUcmVlIH0gZnJvbSBcIi4vQmluYXJ5VHJlZVwiO1xuaW1wb3J0IHsgQmluYXJ5Q2hhcmFjdGVyVHJlZSB9IGZyb20gXCIuL0JpbmFyeUNoYXJhY3RlclRyZWVcIjtcbmltcG9ydCB7IEJpbmFyeVR5cGVUcmVlIH0gZnJvbSBcIi4vQmluYXJ5VHlwZVRyZWVcIjtcbmV4cG9ydCBjbGFzcyBDb25jZXB0c0RhdGEge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBcImNvbmNlcHRzQXJyYXlcIjtcbiAgICB9XG4gICAgc3RhdGljIENoZWNrQ29udGFpbnMoY29uY2VwdCkge1xuICAgICAgICB2YXIgY29udGFpbnMgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbmNlcHRzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmNlcHRzQXJyYXlbaV0uaWQgPT0gY29uY2VwdC5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGFpbnM7XG4gICAgfVxuICAgIHN0YXRpYyBBZGRDb25jZXB0VG9TdG9yYWdlKGNvbmNlcHQpIHtcbiAgICAgICAgaWYgKGNvbmNlcHQuaWQgPiAwKSB7XG4gICAgICAgICAgICBzdG9yZVRvRGF0YWJhc2UoXCJjb25jZXB0XCIsIGNvbmNlcHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBBZGRDb25jZXB0KGNvbmNlcHQpIHtcbiAgICAgICAgaWYgKGNvbmNlcHQuaWQgPiAwKSB7XG4gICAgICAgICAgICAvL3ZhciBjb250YWlucyA9IHRoaXMuQ2hlY2tDb250YWlucyhjb25jZXB0KTtcbiAgICAgICAgICAgIC8vIHRoaXMuY29uY2VwdERpY3Rpb25hcnlbY29uY2VwdC5pZF0gPSBjb25jZXB0O1xuICAgICAgICAgICAgLy8gICAgaWYoY29udGFpbnMpe1xuICAgICAgICAgICAgLy8gICB0aGlzLlJlbW92ZUNvbmNlcHQoY29uY2VwdCk7XG4gICAgICAgICAgICAvLyAgfVxuICAgICAgICAgICAgc3RvcmVUb0RhdGFiYXNlKFwiY29uY2VwdFwiLCBjb25jZXB0KTtcbiAgICAgICAgICAgIEJpbmFyeVRyZWUuYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KTtcbiAgICAgICAgICAgIEJpbmFyeVR5cGVUcmVlLmFkZENvbmNlcHRUb1RyZWUoY29uY2VwdCk7XG4gICAgICAgICAgICBCaW5hcnlDaGFyYWN0ZXJUcmVlLmFkZENvbmNlcHRUb1RyZWUoY29uY2VwdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEFkZENvbmNlcHRUb01lbW9yeShjb25jZXB0KSB7XG4gICAgICAgIGlmIChjb25jZXB0LmlkID4gMCkge1xuICAgICAgICAgICAgLy92YXIgY29udGFpbnMgPSB0aGlzLkNoZWNrQ29udGFpbnMoY29uY2VwdCk7XG4gICAgICAgICAgICAvLyB0aGlzLmNvbmNlcHREaWN0aW9uYXJ5W2NvbmNlcHQuaWRdID0gY29uY2VwdDtcbiAgICAgICAgICAgIC8vICAgIGlmKGNvbnRhaW5zKXtcbiAgICAgICAgICAgIC8vICAgdGhpcy5SZW1vdmVDb25jZXB0KGNvbmNlcHQpO1xuICAgICAgICAgICAgLy8gIH1cbiAgICAgICAgICAgIEJpbmFyeVRyZWUuYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KTtcbiAgICAgICAgICAgIEJpbmFyeVR5cGVUcmVlLmFkZENvbmNlcHRUb1RyZWUoY29uY2VwdCk7XG4gICAgICAgICAgICBCaW5hcnlDaGFyYWN0ZXJUcmVlLmFkZENvbmNlcHRUb1RyZWUoY29uY2VwdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEFkZENvbmNlcHRUZW1wb3JhcnkoY29uY2VwdCkge1xuICAgICAgICB2YXIgY29udGFpbnMgPSB0aGlzLkNoZWNrQ29udGFpbnMoY29uY2VwdCk7XG4gICAgICAgIHRoaXMuY29uY2VwdERpY3Rpb25hcnlbY29uY2VwdC5pZF0gPSBjb25jZXB0O1xuICAgICAgICBpZiAoY29udGFpbnMpIHtcbiAgICAgICAgICAgIHRoaXMuUmVtb3ZlQ29uY2VwdChjb25jZXB0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmNlcHRzQXJyYXkucHVzaChjb25jZXB0KTtcbiAgICB9XG4gICAgc3RhdGljIFJlbW92ZUNvbmNlcHQoY29uY2VwdCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29uY2VwdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uY2VwdHNBcnJheVtpXS5pZCA9PSBjb25jZXB0LmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25jZXB0c0FycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW1vdmVGcm9tRGF0YWJhc2UoXCJjb25jZXB0XCIsIGNvbmNlcHQuaWQpO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0Q29uY2VwdChpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIG15Q29uY2VwdCA9IG5ldyBDb25jZXB0KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIFwiMFwiLCAwLCAwLCAwLCAwLCAwLCAwLCBmYWxzZSk7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IHlpZWxkIEJpbmFyeVRyZWUuZ2V0Tm9kZUZyb21UcmVlKGlkKTtcbiAgICAgICAgICAgIGlmIChub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZWRDb25jZXB0ID0gbm9kZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAocmV0dXJuZWRDb25jZXB0KSB7XG4gICAgICAgICAgICAgICAgICAgIG15Q29uY2VwdCA9IHJldHVybmVkQ29uY2VwdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZihteUNvbmNlcHQuaWQgPT0gMCB8fCBteUNvbmNlcHQgPT0gbnVsbCl7XG4gICAgICAgICAgICAvLyAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy5jb25jZXB0c0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYodGhpcy5jb25jZXB0c0FycmF5W2ldLmlkID09IGlkKXtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG15Q29uY2VwdCA9IHRoaXMuY29uY2VwdHNBcnJheVtpXTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHJldHVybiBteUNvbmNlcHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyKGNoYXJhY3RlclZhbHVlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdCA9IG5ldyBDb25jZXB0KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIFwiMFwiLCAwLCAwLCAwLCAwLCAwLCAwLCBmYWxzZSk7XG4gICAgICAgICAgICAvLyAgZm9yKHZhciBpPTA7IGk8dGhpcy5jb25jZXB0c0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIC8vICAgICAgaWYodGhpcy5jb25jZXB0c0FycmF5W2ldLmNoYXJhY3RlclZhbHVlID09IGNoYXJhY3RlclZhbHVlKXtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uY2VwdCA9IHRoaXMuY29uY2VwdHNBcnJheVtpXTtcbiAgICAgICAgICAgIC8vICAgICAgfVxuICAgICAgICAgICAgLy8gIH1cbiAgICAgICAgICAgIHZhciBOb2RlID0gQmluYXJ5Q2hhcmFjdGVyVHJlZS5nZXROb2RlRnJvbVRyZWUoY2hhcmFjdGVyVmFsdWUpO1xuICAgICAgICAgICAgaWYgKE5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdvdCB0aGUgY2hhcmFjdGVyXCIpO1xuICAgICAgICAgICAgICAgIGNvbmNlcHQgPSBOb2RlLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2hhcmFjdGVyVmFsdWUpO1xuICAgICAgICAgICAgLy8gdmFyIE5vZGUgPSBCaW5hcnlDaGFyYWN0ZXJUcmVlLmdldE5vZGVGcm9tVHJlZShjaGFyYWN0ZXJWYWx1ZSk7XG4gICAgICAgICAgICAvLyBpZihOb2RlKXtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhOb2RlLnZhbHVlKTtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gTm9kZS52YWx1ZTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIEdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGVMb2NhbChjaGFyYWN0ZXJfdmFsdWUsIHR5cGVJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSBuZXcgQ29uY2VwdCgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCBcIjBcIiwgMCwgMCwgMCwgMCwgMCwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgLy92YXIgTm9kZSA9IGF3YWl0IEJpbmFyeUNoYXJhY3RlclRyZWUuZ2V0Q2hhcmFjdGVyQW5kVHlwZUZyb21UcmVlKGNoYXJhY3Rlcl92YWx1ZSx0eXBlSWQpO1xuICAgICAgICAgICAgY29uY2VwdCA9IHlpZWxkIEJpbmFyeVR5cGVUcmVlLmdldFR5cGVWYXJpYW50c1dpdGhDaGFyYWN0ZXJWYWx1ZShjaGFyYWN0ZXJfdmFsdWUsIHR5cGVJZCk7XG4gICAgICAgICAgICAvLyBpZihOb2RlKXtcbiAgICAgICAgICAgIC8vICAgICBjb25jZXB0ID0gIE5vZGUudmFsdWU7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJmb3VuZCB0aGUgb3V0cHV0XCIpO1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGNvbmNlcHQpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0Q29uY2VwdHNCeVR5cGVJZCh0eXBlSWQpIHtcbiAgICAgICAgdmFyIG15Q29uY2VwdDtcbiAgICAgICAgbGV0IENvbmNlcHRMaXN0ID0gW107XG4gICAgICAgIG15Q29uY2VwdCA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25jZXB0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25jZXB0c0FycmF5W2ldLnR5cGVJZCA9PSB0eXBlSWQpIHtcbiAgICAgICAgICAgICAgICBDb25jZXB0TGlzdC5wdXNoKHRoaXMuY29uY2VwdHNBcnJheVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gIGdldEZyb21EYXRhYmFzZVdpdGhUeXBlKFwiY29uY2VwdFwiLFwidHlwZUlkXCIsdHlwZUlkKS50aGVuKGNvbmNlcHRMaXN0PT57XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcInRoaSBzaXMgbXkgbGlzdFwiKTtcbiAgICAgICAgLy8gIH0pO1xuICAgICAgICAvLyAgIHZhciBkYkNvbmNlcHRMaXN0ID0gYXdhaXQgZ2V0RnJvbURhdGFiYXNlV2l0aFR5cGVPbGQoXCJjb25jZXB0XCIsXCJ0eXBlSWRcIiwgdHlwZUlkKTtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhkYkNvbmNlcHRMaXN0KTtcbiAgICAgICAgLy8gICBpZihBcnJheS5pc0FycmF5KGRiQ29uY2VwdExpc3QpKXtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhkYkNvbmNlcHRMaXN0KTtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhkYkNvbmNlcHRMaXN0Lmxlbmd0aCk7XG4gICAgICAgIC8vICBmb3IodmFyIGk9MDsgaTwgZGJDb25jZXB0TGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImhlcmUgdG8gcHVzaCBmaXJzdHNcIik7XG4gICAgICAgIC8vICAgICB2YXIgY29udGFpbnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgLy8gICAgIGZvcih2YXIgaj0wOyBqPCBDb25jZXB0TGlzdC5sZW5ndGg7IGorKyl7XG4gICAgICAgIC8vICAgICAgICAgaWYoZGJDb25jZXB0TGlzdFtpXS5pZCA9PSBDb25jZXB0TGlzdFtqXS5pZCl7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnRhaW5zID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImhlcmUgdG8gcHVzaFwiKTtcbiAgICAgICAgLy8gICAgIGlmKCFjb250YWlucyl7XG4gICAgICAgIC8vICAgICAgICAgQ29uY2VwdExpc3QucHVzaChkYkNvbmNlcHRMaXN0W2ldKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gIH1cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGNvbmNlcHQgbGlzdFwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coQ29uY2VwdExpc3QpO1xuICAgICAgICByZXR1cm4gQ29uY2VwdExpc3Q7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb25jZXB0c0J5VHlwZUlkQW5kVXNlcih0eXBlSWQsIHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbGV0IENvbmNlcHRMaXN0ID0gW107XG4gICAgICAgICAgICBDb25jZXB0TGlzdCA9IHlpZWxkIEJpbmFyeVR5cGVUcmVlLmdldFR5cGVWYXJpYW50c0Zyb21UcmVlV2l0aFVzZXJJZCh0eXBlSWQsIHVzZXJJZCk7XG4gICAgICAgICAgICByZXR1cm4gQ29uY2VwdExpc3Q7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0QmluYXJ5Q2hhcmFjdGVyVHJlZSgpIHtcbiAgICAgICAgcmV0dXJuIEJpbmFyeUNoYXJhY3RlclRyZWUuY2hhcmFjdGVyUm9vdDtcbiAgICB9XG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG59XG5Db25jZXB0c0RhdGEuY29uY2VwdHNBcnJheSA9IFtdO1xuQ29uY2VwdHNEYXRhLmNvbmNlcHREaWN0aW9uYXJ5ID0gW107XG4iLCJpbXBvcnQgeyBDb25jZXB0IH0gZnJvbSBcIi4vQ29uY2VwdFwiO1xuZXhwb3J0IGNsYXNzIENvbm5lY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKGlkID0gMCwgb2ZUaGVDb25jZXB0SWQsIHRvVGhlQ29uY2VwdElkLCBvZlRoZUNvbmNlcHRVc2VySWQsIHRvVGhlQ29uY2VwdFVzZXJJZCwgdXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIG9yZGVySWQsIG9yZGVyVXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCkge1xuICAgICAgICB0aGlzLmlzVGVtcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR5cGUgPSBuZXcgQ29uY2VwdCgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCBcIjBcIiwgMCwgMCwgMCwgMCwgMCwgMCwgZmFsc2UpO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuT2ZUaGVDb25jZXB0SWQgPSBvZlRoZUNvbmNlcHRJZDtcbiAgICAgICAgdGhpcy5Ub1RoZUNvbmNlcHRJZCA9IHRvVGhlQ29uY2VwdElkO1xuICAgICAgICB0aGlzLm9mVGhlQ29uY2VwdElkID0gb2ZUaGVDb25jZXB0SWQ7XG4gICAgICAgIHRoaXMudG9UaGVDb25jZXB0SWQgPSB0b1RoZUNvbmNlcHRJZDtcbiAgICAgICAgdGhpcy5PZlRoZUNvbmNlcHRVc2VySWQgPSBvZlRoZUNvbmNlcHRVc2VySWQ7XG4gICAgICAgIHRoaXMuVG9UaGVDb25jZXB0VXNlcklkID0gdG9UaGVDb25jZXB0VXNlcklkO1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdGhpcy50eXBlSWQgPSB0eXBlSWQ7XG4gICAgICAgIHRoaXMudHlwZVVzZXJJZCA9IHR5cGVVc2VySWQ7XG4gICAgICAgIHRoaXMub3JkZXJJZCA9IG9yZGVySWQ7XG4gICAgICAgIHRoaXMub3JkZXJVc2VySWQgPSBvcmRlclVzZXJJZDtcbiAgICAgICAgdGhpcy5zZWN1cml0eUlkID0gc2VjdXJpdHlJZDtcbiAgICAgICAgdGhpcy5zZWN1cml0eVVzZXJJZCA9IHNlY3VyaXR5VXNlcklkO1xuICAgICAgICB0aGlzLmFjY2Vzc0lkID0gYWNjZXNzSWQ7XG4gICAgICAgIHRoaXMuYWNjZXNzVXNlcklkID0gYWNjZXNzVXNlcklkO1xuICAgICAgICB0aGlzLnNlc3Npb25JbmZvcm1hdGlvbklkID0gc2Vzc2lvbkluZm9ybWF0aW9uSWQ7XG4gICAgICAgIHRoaXMuc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkID0gc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkO1xuICAgICAgICB0aGlzLmVudHJ5VGltZVN0YW1wID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy50ZXJtaW5hdGlvbkRhdGVUaW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5sb2NhbFN5bmNUaW1lID0gbmV3IERhdGUoKTtcbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IElkZW50aWZpZXJGbGFncyB9IGZyb20gXCIuLi9JZGVudGlmaWVyRmxhZ3NcIjtcbmltcG9ydCB7IENvbm5lY3Rpb25Ob2RlIH0gZnJvbSBcIi4vQ29ubmVjdGlvbk5vZGVcIjtcbmV4cG9ydCBjbGFzcyBDb25uZWN0aW9uQmluYXJ5VHJlZSB7XG4gICAgc3RhdGljIGFkZE5vZGVUb1RyZWUobm9kZSkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9ucm9vdCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25yb290ID0gbm9kZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25yb290O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9ucm9vdCA9IHRoaXMuY29ubmVjdGlvbnJvb3QuYWRkTm9kZShub2RlLCB0aGlzLmNvbm5lY3Rpb25yb290LCB0aGlzLmNvbm5lY3Rpb25yb290LmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGFkZENvbm5lY3Rpb25Ub1RyZWUoY29ubmVjdGlvbikge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBDb25uZWN0aW9uTm9kZShjb25uZWN0aW9uLmlkLCBjb25uZWN0aW9uLCBudWxsLCBudWxsKTtcbiAgICAgICAgdGhpcy5hZGROb2RlVG9UcmVlKG5vZGUpO1xuICAgIH1cbiAgICBzdGF0aWMgd2FpdEZvckRhdGFUb0xvYWQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tGbGFnKHJlc29sdmUpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJub3RcIik7XG4gICAgICAgICAgICAgICAgfSwgMjUwMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgY2hlY2tGbGFnKHJlc29sdmUpIHtcbiAgICAgICAgaWYgKElkZW50aWZpZXJGbGFncy5pc0Nvbm5lY3Rpb25Mb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKFwiZG9uZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoQ29ubmVjdGlvbkJpbmFyeVRyZWUuY2hlY2tGbGFnLCAxMDAwLCByZXNvbHZlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgc3RhdGljIHJlbW92ZU5vZGVGcm9tVHJlZShpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbnJvb3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25yb290ID0gdGhpcy5jb25uZWN0aW9ucm9vdC5yZW1vdmVOb2RlKHRoaXMuY29ubmVjdGlvbnJvb3QsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXROb2RlRnJvbVRyZWUoaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB5aWVsZCB0aGlzLndhaXRGb3JEYXRhVG9Mb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9ucm9vdCkge1xuICAgICAgICAgICAgICAgIHZhciBOb2RlID0gdGhpcy5jb25uZWN0aW9ucm9vdC5nZXRGcm9tTm9kZShpZCwgdGhpcy5jb25uZWN0aW9ucm9vdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9ucm9vdDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuQ29ubmVjdGlvbkJpbmFyeVRyZWUuY29ubmVjdGlvbnJvb3QgPSBudWxsO1xuIiwiZXhwb3J0IGNsYXNzIENvbm5lY3Rpb25Ob2RlIHtcbiAgICBjb25zdHJ1Y3RvcihrZXksIHZhbHVlLCBsZWZ0Tm9kZSwgcmlnaHROb2RlKSB7XG4gICAgICAgIHRoaXMudmFyaWFudHMgPSBbXTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxlZnROb2RlID0gbGVmdE5vZGU7XG4gICAgICAgIHRoaXMucmlnaHROb2RlID0gcmlnaHROb2RlO1xuICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gbnVsbDtcbiAgICB9XG4gICAgYWRkQ3VycmVudE5vZGUocGFzc2VkTm9kZSwgbm9kZSkge1xuICAgICAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlID0gcGFzc2VkTm9kZTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXNzZWROb2RlLnZhbHVlLnR5cGVJZCAhPSBub2RlLnZhbHVlLnR5cGVJZCkge1xuICAgICAgICAgICAgbm9kZS5jdXJyZW50Tm9kZSA9IHRoaXMuYWRkQ3VycmVudE5vZGUocGFzc2VkTm9kZSwgbm9kZS5jdXJyZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGFkZEN1cnJlbnROb2RlVHlwZShwYXNzZWROb2RlLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUgPSBwYXNzZWROb2RlO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbnRhaW5zID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS52YXJpYW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5vZGUudmFyaWFudHNbaV0udmFsdWUuaWQgPT0gcGFzc2VkTm9kZS52YWx1ZS5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNvbnRhaW5zKSB7XG4gICAgICAgICAgICBub2RlLnZhcmlhbnRzLnB1c2gocGFzc2VkTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9ub2RlLmN1cnJlbnROb2RlID0gdGhpcy5hZGRDdXJyZW50Tm9kZShwYXNzZWROb2RlLCBub2RlLmN1cnJlbnROb2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGFkZE5vZGUocGFzc2VkTm9kZSwgbm9kZSwgaGVpZ2h0KSB7XG4gICAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUgPSBwYXNzZWROb2RlO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIExlZnROb2RlID0gbm9kZS5sZWZ0Tm9kZTtcbiAgICAgICAgdmFyIFJpZ2h0Tm9kZSA9IG5vZGUucmlnaHROb2RlO1xuICAgICAgICBpZiAobm9kZS5rZXkgPiBwYXNzZWROb2RlLmtleSkge1xuICAgICAgICAgICAgbm9kZS5sZWZ0Tm9kZSA9IHRoaXMuYWRkTm9kZShwYXNzZWROb2RlLCBMZWZ0Tm9kZSwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChub2RlLmtleSA8IHBhc3NlZE5vZGUua2V5KSB7XG4gICAgICAgICAgICBub2RlLnJpZ2h0Tm9kZSA9IHRoaXMuYWRkTm9kZShwYXNzZWROb2RlLCBSaWdodE5vZGUsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZWxzZSBpZiAobm9kZS5rZXkgPT0gcGFzc2VkTm9kZS5rZXkgJiYgbm9kZS5rZXkgIT0gXCJcIil7XG4gICAgICAgIC8vICAgICBub2RlLmN1cnJlbnROb2RlID0gcGFzc2VkTm9kZTtcbiAgICAgICAgLy8gfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuaGVpZ2h0ID0gMSArIE1hdGgubWF4KHRoaXMuZ2V0SGVpZ2h0KG5vZGUubGVmdE5vZGUpLCB0aGlzLmdldEhlaWdodChub2RlLnJpZ2h0Tm9kZSkpO1xuICAgICAgICBsZXQgYmFsYW5jaW5nRmFjdG9yID0gdGhpcy5nZXRCYWxhbmNlRmFjdG9yKG5vZGUpO1xuICAgICAgICBpZiAoYmFsYW5jaW5nRmFjdG9yID4gMSkge1xuICAgICAgICAgICAgaWYgKG5vZGUubGVmdE5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFzc2VkTm9kZS5rZXkgPCBub2RlLmxlZnROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yaWdodFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5rZXkgPiBub2RlLmxlZnROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmxlZnROb2RlID0gdGhpcy5sZWZ0Um90YXRlKG5vZGUubGVmdE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yaWdodFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJhbGFuY2luZ0ZhY3RvciA8IC0xKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5yaWdodE5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFzc2VkTm9kZS5rZXkgPiBub2RlLnJpZ2h0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGVmdFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5rZXkgPCBub2RlLnJpZ2h0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yaWdodE5vZGUgPSB0aGlzLnJpZ2h0Um90YXRlKG5vZGUucmlnaHROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGVmdFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGFkZFR5cGVOb2RlKHBhc3NlZE5vZGUsIG5vZGUsIGhlaWdodCkge1xuICAgICAgICB2YXIgZGVidWdGbGFnID0gZmFsc2U7XG4gICAgICAgIGlmIChwYXNzZWROb2RlLnZhbHVlLnR5cGVJZCAhPSAwKSB7XG4gICAgICAgICAgICAvLyBpZihwYXNzZWROb2RlLnZhbHVlLmNoYXJhY3RlclZhbHVlID09IFwiRGVmYXVsdFwiKXtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImRlZmF1bHQgaGVyZVwiKTtcbiAgICAgICAgICAgIC8vICAgICBkZWJ1Z0ZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcXVhbCBoZXJlXCIsIG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlID0gcGFzc2VkTm9kZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBMZWZ0Tm9kZSA9IG5vZGUubGVmdE5vZGU7XG4gICAgICAgICAgICB2YXIgUmlnaHROb2RlID0gbm9kZS5yaWdodE5vZGU7XG4gICAgICAgICAgICBpZiAobm9kZS5rZXkgPiBwYXNzZWROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZWZ0ICBoZXJlXCIsIG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLmxlZnROb2RlID0gdGhpcy5hZGRUeXBlTm9kZShwYXNzZWROb2RlLCBMZWZ0Tm9kZSwgaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUua2V5IDwgcGFzc2VkTm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmlnaHQgaGVyZVwiLCBub2RlLCBSaWdodE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLnJpZ2h0Tm9kZSA9IHRoaXMuYWRkVHlwZU5vZGUocGFzc2VkTm9kZSwgUmlnaHROb2RlLCBoZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVsc2UgaGVyZVwiLCBub2RlLCBwYXNzZWROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUua2V5ID09IHBhc3NlZE5vZGUua2V5ICYmIG5vZGUua2V5ICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hZGRDdXJyZW50Tm9kZVR5cGUocGFzc2VkTm9kZSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5oZWlnaHQgPSAxICsgTWF0aC5tYXgodGhpcy5nZXRIZWlnaHQobm9kZS5sZWZ0Tm9kZSksIHRoaXMuZ2V0SGVpZ2h0KG5vZGUucmlnaHROb2RlKSk7XG4gICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWlnaHQgaGVyZVwiLCBub2RlLmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYmFsYW5jaW5nRmFjdG9yID0gdGhpcy5nZXRCYWxhbmNlRmFjdG9yKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFsYW5jaW5nRmFjdG9yIGhlcmVcIiwgYmFsYW5jaW5nRmFjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiYWxhbmNpbmdGYWN0b3IgPiAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubGVmdE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3NlZE5vZGUua2V5IDwgbm9kZS5sZWZ0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5lciA9IHRoaXMucmlnaHRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZSAxIFwiLCByZXR1cm5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5rZXkgPiBub2RlLmxlZnROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5sZWZ0Tm9kZSA9IHRoaXMubGVmdFJvdGF0ZShub2RlLmxlZnROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5lciA9IHRoaXMucmlnaHRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZSAyIFwiLCByZXR1cm5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYmFsYW5jaW5nRmFjdG9yIDwgLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5yaWdodE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3NlZE5vZGUua2V5ID4gbm9kZS5yaWdodE5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZXIgPSB0aGlzLmxlZnRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZSAzIFwiLCByZXR1cm5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5rZXkgPCBub2RlLnJpZ2h0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmlnaHROb2RlID0gdGhpcy5yaWdodFJvdGF0ZShub2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZXIgPSB0aGlzLmxlZnRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZTQgXCIsIHJldHVybmVyLCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5lcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndoYXQgaGVyZVwiLCBub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBoZXJlIDZcIiwgbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHJpZ2h0Um90YXRlKHkpIHtcbiAgICAgICAgaWYgKHkpIHtcbiAgICAgICAgICAgIGxldCB4ID0geS5sZWZ0Tm9kZTtcbiAgICAgICAgICAgIGlmICh4KSB7XG4gICAgICAgICAgICAgICAgbGV0IFQyID0geC5yaWdodE5vZGU7XG4gICAgICAgICAgICAgICAgeS5sZWZ0Tm9kZSA9IFQyO1xuICAgICAgICAgICAgICAgIHgucmlnaHROb2RlID0geTtcbiAgICAgICAgICAgICAgICB5LmhlaWdodCA9IE1hdGgubWF4KHRoaXMuZ2V0SGVpZ2h0KHkubGVmdE5vZGUpLCB0aGlzLmdldEhlaWdodCh5LnJpZ2h0Tm9kZSkpICsgMTtcbiAgICAgICAgICAgICAgICB4LmhlaWdodCA9IE1hdGgubWF4KHRoaXMuZ2V0SGVpZ2h0KHgubGVmdE5vZGUpLCB0aGlzLmdldEhlaWdodCh4LnJpZ2h0Tm9kZSkpICsgMTtcbiAgICAgICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJldHVybiB4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB5O1xuICAgIH1cbiAgICBsZWZ0Um90YXRlKHgpIHtcbiAgICAgICAgaWYgKHgpIHtcbiAgICAgICAgICAgIGxldCB5ID0geC5yaWdodE5vZGU7XG4gICAgICAgICAgICBpZiAoeSkge1xuICAgICAgICAgICAgICAgIGxldCBUMiA9IHkubGVmdE5vZGU7XG4gICAgICAgICAgICAgICAgeS5sZWZ0Tm9kZSA9IHg7XG4gICAgICAgICAgICAgICAgeC5yaWdodE5vZGUgPSBUMjtcbiAgICAgICAgICAgICAgICB4LmhlaWdodCA9IE1hdGgubWF4KHRoaXMuZ2V0SGVpZ2h0KHgubGVmdE5vZGUpLCB0aGlzLmdldEhlaWdodCh4LnJpZ2h0Tm9kZSkgKyAxKTtcbiAgICAgICAgICAgICAgICB5LmhlaWdodCA9IE1hdGgubWF4KHRoaXMuZ2V0SGVpZ2h0KHkubGVmdE5vZGUpLCB0aGlzLmdldEhlaWdodCh4LnJpZ2h0Tm9kZSkgKyAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vcmV0dXJuIHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGdldEhlaWdodChub2RlKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGdldEJhbGFuY2VGYWN0b3IoTikge1xuICAgICAgICBpZiAoTiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5nZXRIZWlnaHQoTi5sZWZ0Tm9kZSkgLSB0aGlzLmdldEhlaWdodChOLnJpZ2h0Tm9kZSk7XG4gICAgfVxuICAgIGdldEZyb21Ob2RlKGlkLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBpZiAoaWQgPT0gbm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlkIDwgbm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGcm9tTm9kZShpZCwgbm9kZS5sZWZ0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpZCA+IG5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RnJvbU5vZGUoaWQsIG5vZGUucmlnaHROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBnZXRDaGFyYWN0ZXJGcm9tTm9kZSh2YWx1ZSwgbm9kZSkge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09IG5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA8IG5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2hhcmFjdGVyRnJvbU5vZGUodmFsdWUsIG5vZGUubGVmdE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPiBub2RlLmtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENoYXJhY3RlckZyb21Ob2RlKHZhbHVlLCBub2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcmVtb3ZlTm9kZShwYXNzZWROb2RlLCBpZCkge1xuICAgICAgICBpZiAocGFzc2VkTm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFzc2VkTm9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFzc2VkTm9kZS5rZXkgPiBpZCkge1xuICAgICAgICAgICAgcGFzc2VkTm9kZS5sZWZ0Tm9kZSA9IHRoaXMucmVtb3ZlTm9kZShwYXNzZWROb2RlLmxlZnROb2RlLCBpZCk7XG4gICAgICAgICAgICByZXR1cm4gcGFzc2VkTm9kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXNzZWROb2RlLmtleSA8IGlkKSB7XG4gICAgICAgICAgICBwYXNzZWROb2RlLnJpZ2h0Tm9kZSA9IHRoaXMucmVtb3ZlTm9kZShwYXNzZWROb2RlLnJpZ2h0Tm9kZSwgaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHBhc3NlZE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYocGFzc2VkTm9kZS52YXJpYW50cy5sZW5ndGggPiAwKXtcbiAgICAgICAgLy8gICAgIGlmKHBhc3NlZE5vZGUudmFsdWUuaWQgPT0gaWQgKXtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIHZhciBuZXdOb2RlID0gcGFzc2VkTm9kZS52YXJpYW50c1swXTtcbiAgICAgICAgLy8gICAgIGlmKG5ld05vZGUpe1xuICAgICAgICAvLyAgICAgICAgIHBhc3NlZE5vZGUudmFsdWUgPSBuZXdOb2RlLnZhbHVlO1xuICAgICAgICAvLyAgICAgICAgIHBhc3NlZE5vZGUua2V5ID0gbmV3Tm9kZS5rZXk7XG4gICAgICAgIC8vICAgICAgICAgcGFzc2VkTm9kZS5jdXJyZW50Tm9kZSA9IG5ld05vZGUuY3VycmVudE5vZGU7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHBhc3NlZE5vZGU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKHBhc3NlZE5vZGUubGVmdE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHRlbXAgPSBwYXNzZWROb2RlLnJpZ2h0Tm9kZTtcbiAgICAgICAgICAgIHBhc3NlZE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5yaWdodE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHRlbXAgPSBwYXNzZWROb2RlLmxlZnROb2RlO1xuICAgICAgICAgICAgcGFzc2VkTm9kZSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHBhc3NpbmcgdGhlIHJpZ2h0Tm9kZSB0byB0aGUgaW5PcmRlclN1Y2Nlc3NvciBnaXZlcyB0aGUgaW1tZWRpYXRlIHN1Y2Nlc3NvciBvZiB0aGUgbm9kZVxuICAgICAgICAgICAgdmFyIGltbWVkaWF0ZVN1Y2Nlc3NvciA9IHRoaXMuaW5PcmRlclN1Y2Nlc3NvcihwYXNzZWROb2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICBwYXNzZWROb2RlLnZhbHVlID0gaW1tZWRpYXRlU3VjY2Vzc29yLnZhbHVlO1xuICAgICAgICAgICAgcGFzc2VkTm9kZS5rZXkgPSBpbW1lZGlhdGVTdWNjZXNzb3Iua2V5O1xuICAgICAgICAgICAgcGFzc2VkTm9kZS52YXJpYW50cyA9IGltbWVkaWF0ZVN1Y2Nlc3Nvci52YXJpYW50cztcbiAgICAgICAgICAgIHBhc3NlZE5vZGUuY3VycmVudE5vZGUgPSBpbW1lZGlhdGVTdWNjZXNzb3IuY3VycmVudE5vZGU7XG4gICAgICAgICAgICBwYXNzZWROb2RlLnJpZ2h0Tm9kZSA9IHRoaXMucmVtb3ZlTm9kZShwYXNzZWROb2RlLnJpZ2h0Tm9kZSwgaW1tZWRpYXRlU3VjY2Vzc29yLmtleSk7XG4gICAgICAgICAgICByZXR1cm4gcGFzc2VkTm9kZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVOb2RlV2l0aFZhcmlhbnRzKHBhc3NlZE5vZGUsIHR5cGVJZGVudGlmaWVyLCBjb25jZXB0SWQpIHtcbiAgICAgICAgaWYgKHBhc3NlZE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhc3NlZE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhc3NlZE5vZGUua2V5ID4gdHlwZUlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHBhc3NlZE5vZGUubGVmdE5vZGUgPSB0aGlzLnJlbW92ZU5vZGVXaXRoVmFyaWFudHMocGFzc2VkTm9kZS5sZWZ0Tm9kZSwgdHlwZUlkZW50aWZpZXIsIGNvbmNlcHRJZCk7XG4gICAgICAgICAgICByZXR1cm4gcGFzc2VkTm9kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXNzZWROb2RlLmtleSA8IHR5cGVJZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBwYXNzZWROb2RlLnJpZ2h0Tm9kZSA9IHRoaXMucmVtb3ZlTm9kZVdpdGhWYXJpYW50cyhwYXNzZWROb2RlLnJpZ2h0Tm9kZSwgdHlwZUlkZW50aWZpZXIsIGNvbmNlcHRJZCk7XG4gICAgICAgICAgICByZXR1cm4gcGFzc2VkTm9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFzc2VkTm9kZS52YXJpYW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvL2NvbmRpdGlvbiBpZiB0aGUgbWFpbiBub2RlIGlzIGVxdWFsIHRvIHRoZSB2YWx1ZVxuICAgICAgICAgICAgaWYgKHBhc3NlZE5vZGUudmFsdWUuaWQgPT0gY29uY2VwdElkKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld05vZGUgPSBwYXNzZWROb2RlLnZhcmlhbnRzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChuZXdOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhc3NlZE5vZGUudmFsdWUgPSBuZXdOb2RlLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBwYXNzZWROb2RlLmtleSA9IG5ld05vZGUua2V5O1xuICAgICAgICAgICAgICAgICAgICBwYXNzZWROb2RlLmN1cnJlbnROb2RlID0gbmV3Tm9kZS5jdXJyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgcGFzc2VkTm9kZS52YXJpYW50cy5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXNzZWROb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGluIHRoZSBjb25kaXRpb24gdGhhdCB0aGUgbWFpbiBub2RlIGlzIG5vdCBlcXVhbCB0byB0aGUgY2hlY2tpbmcgdmFsdWUgXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXNzZWROb2RlLnZhcmlhbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25jZXB0SWQgPT0gcGFzc2VkTm9kZS52YXJpYW50c1tpXS52YWx1ZS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc2VkTm9kZS52YXJpYW50cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFzc2VkTm9kZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocGFzc2VkTm9kZS5sZWZ0Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgdGVtcCA9IHBhc3NlZE5vZGUucmlnaHROb2RlO1xuICAgICAgICAgICAgcGFzc2VkTm9kZSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXNzZWROb2RlLnJpZ2h0Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgdGVtcCA9IHBhc3NlZE5vZGUubGVmdE5vZGU7XG4gICAgICAgICAgICBwYXNzZWROb2RlID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gcGFzc2luZyB0aGUgcmlnaHROb2RlIHRvIHRoZSBpbk9yZGVyU3VjY2Vzc29yIGdpdmVzIHRoZSBpbW1lZGlhdGUgc3VjY2Vzc29yIG9mIHRoZSBub2RlXG4gICAgICAgICAgICB2YXIgaW1tZWRpYXRlU3VjY2Vzc29yID0gdGhpcy5pbk9yZGVyU3VjY2Vzc29yKHBhc3NlZE5vZGUucmlnaHROb2RlKTtcbiAgICAgICAgICAgIHBhc3NlZE5vZGUudmFsdWUgPSBpbW1lZGlhdGVTdWNjZXNzb3IudmFsdWU7XG4gICAgICAgICAgICBwYXNzZWROb2RlLmtleSA9IGltbWVkaWF0ZVN1Y2Nlc3Nvci5rZXk7XG4gICAgICAgICAgICBwYXNzZWROb2RlLnZhcmlhbnRzID0gaW1tZWRpYXRlU3VjY2Vzc29yLnZhcmlhbnRzO1xuICAgICAgICAgICAgcGFzc2VkTm9kZS5jdXJyZW50Tm9kZSA9IGltbWVkaWF0ZVN1Y2Nlc3Nvci5jdXJyZW50Tm9kZTtcbiAgICAgICAgICAgIHBhc3NlZE5vZGUucmlnaHROb2RlID0gdGhpcy5yZW1vdmVOb2RlV2l0aFZhcmlhbnRzKHBhc3NlZE5vZGUucmlnaHROb2RlLCBpbW1lZGlhdGVTdWNjZXNzb3Iua2V5LCBjb25jZXB0SWQpO1xuICAgICAgICAgICAgcmV0dXJuIHBhc3NlZE5vZGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5PcmRlclN1Y2Nlc3Nvcihyb290KSB7XG4gICAgICAgIHdoaWxlIChyb290LmxlZnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJvb3QgPSByb290LmxlZnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb290O1xuICAgIH1cbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgSWRlbnRpZmllckZsYWdzIH0gZnJvbSBcIi4uL0lkZW50aWZpZXJGbGFnc1wiO1xuaW1wb3J0IHsgQ29ubmVjdGlvbk5vZGUgfSBmcm9tIFwiLi9Db25uZWN0aW9uTm9kZVwiO1xuZXhwb3J0IGNsYXNzIENvbm5lY3Rpb25UeXBlVHJlZSB7XG4gICAgc3RhdGljIGFkZE5vZGVUb1RyZWUobm9kZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblR5cGVSb290ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25UeXBlUm9vdCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvblR5cGVSb290O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uVHlwZVJvb3QgPSB0aGlzLmNvbm5lY3Rpb25UeXBlUm9vdC5hZGRUeXBlTm9kZShub2RlLCB0aGlzLmNvbm5lY3Rpb25UeXBlUm9vdCwgdGhpcy5jb25uZWN0aW9uVHlwZVJvb3QuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25UeXBlUm9vdDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyB3YWl0Rm9yRGF0YVRvTG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZsYWcocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIm5vdFwiKTtcbiAgICAgICAgICAgICAgICB9LCAyNTAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja0ZsYWcocmVzb2x2ZSkge1xuICAgICAgICBpZiAoSWRlbnRpZmllckZsYWdzLmlzQ29ubmVjdGlvblR5cGVMb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKFwiZG9uZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoQ29ubmVjdGlvblR5cGVUcmVlLmNoZWNrRmxhZywgMTAwMCwgcmVzb2x2ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIHN0YXRpYyBhZGRDb25uZWN0aW9uVG9UcmVlKGNvbm5lY3Rpb24pIHtcbiAgICAgICAgaWYgKGNvbm5lY3Rpb24udHlwZUlkICE9IDApIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IENvbm5lY3Rpb25Ob2RlKGNvbm5lY3Rpb24udHlwZUlkLCBjb25uZWN0aW9uLCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTm9kZVRvVHJlZShub2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgcmVtb3ZlVHlwZUNvbmNlcHQodHlwZUlkLCBpZCkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uVHlwZVJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblR5cGVSb290ID0gdGhpcy5jb25uZWN0aW9uVHlwZVJvb3QucmVtb3ZlTm9kZVdpdGhWYXJpYW50cyh0aGlzLmNvbm5lY3Rpb25UeXBlUm9vdCwgdHlwZUlkLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGdldE5vZGVGcm9tVHJlZShpZCkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uVHlwZVJvb3QpIHtcbiAgICAgICAgICAgIHZhciBOb2RlID0gdGhpcy5jb25uZWN0aW9uVHlwZVJvb3QuZ2V0RnJvbU5vZGUoaWQsIHRoaXMuY29ubmVjdGlvblR5cGVSb290KTtcbiAgICAgICAgICAgIHJldHVybiBOb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25UeXBlUm9vdDtcbiAgICB9XG4gICAgc3RhdGljIGdldFR5cGVWYXJpYW50c0Zyb21UcmVlKHR5cGVJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSBbXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB5aWVsZCB0aGlzLndhaXRGb3JEYXRhVG9Mb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgTm9kZSA9IHRoaXMuZ2V0Tm9kZUZyb21UcmVlKHR5cGVJZCk7XG4gICAgICAgICAgICBpZiAoTm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ucHVzaChOb2RlID09PSBudWxsIHx8IE5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IE5vZGUudmFsdWUpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTm9kZS52YXJpYW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uLnB1c2goTm9kZS52YXJpYW50c1tpXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjb25uZWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGdldFR5cGVWYXJpYW50c0Zyb21UcmVlV2l0aFVzZXJJZCh0eXBlSWQsIHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRzID0gW107XG4gICAgICAgICAgICB2YXIgTm9kZSA9IHRoaXMuZ2V0Tm9kZUZyb21UcmVlKHR5cGVJZCk7XG4gICAgICAgICAgICBpZiAoTm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChOb2RlLnZhbHVlLnVzZXJJZCA9PSB1c2VySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uY2VwdHMucHVzaChOb2RlID09PSBudWxsIHx8IE5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IE5vZGUudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5vZGUudmFyaWFudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE5vZGUudmFyaWFudHNbaV0udmFsdWUudXNlcklkID09IHVzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uY2VwdHMucHVzaChOb2RlLnZhcmlhbnRzW2ldLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25jZXB0cztcbiAgICAgICAgfSk7XG4gICAgfVxufVxuQ29ubmVjdGlvblR5cGVUcmVlLmNvbm5lY3Rpb25UeXBlUm9vdCA9IG51bGw7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IHJlbW92ZUZyb21EYXRhYmFzZSwgc3RvcmVUb0RhdGFiYXNlIH0gZnJvbSBcIi4uL0RhdGFiYXNlL2luZGV4ZWRkYlwiO1xuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gXCIuL0Nvbm5lY3Rpb25cIjtcbmltcG9ydCB7IENvbm5lY3Rpb25CaW5hcnlUcmVlIH0gZnJvbSBcIi4vQ29ubmVjdGlvbkJpbmFyeVRyZWUvQ29ubmVjdGlvbkJpbmFyeVRyZWVcIjtcbmltcG9ydCB7IENvbm5lY3Rpb25UeXBlVHJlZSB9IGZyb20gXCIuL0Nvbm5lY3Rpb25CaW5hcnlUcmVlL0Nvbm5lY3Rpb25UeXBlVHJlZVwiO1xuZXhwb3J0IGNsYXNzIENvbm5lY3Rpb25EYXRhIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJDb25uZWN0aW9uIEFycmF5XCI7XG4gICAgfVxuICAgIHN0YXRpYyBDaGVja0NvbnRhaW5zKGNvbm5lY3Rpb24pIHtcbiAgICAgICAgdmFyIGNvbnRhaW5zID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25BcnJheVtpXS5pZCA9PSBjb25uZWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWlucztcbiAgICB9XG4gICAgc3RhdGljIEFkZENvbm5lY3Rpb25Ub1N0b3JhZ2UoY29ubmVjdGlvbikge1xuICAgICAgICBzdG9yZVRvRGF0YWJhc2UoXCJjb25uZWN0aW9uXCIsIGNvbm5lY3Rpb24pO1xuICAgIH1cbiAgICBzdGF0aWMgQWRkQ29ubmVjdGlvbihjb25uZWN0aW9uKSB7XG4gICAgICAgIC8vICAgIHZhciBjb250YWlucyA9IHRoaXMuQ2hlY2tDb250YWlucyhjb25uZWN0aW9uKTtcbiAgICAgICAgLy8gICAgIGlmKGNvbnRhaW5zKXtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLlJlbW92ZUNvbm5lY3Rpb24oY29ubmVjdGlvbik7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBpZihjb25uZWN0aW9uLmlkICE9IDAgfHwgY29ubmVjdGlvbi5pc1RlbXApe1xuICAgICAgICAvLyAgICAgICAgIHN0b3JlVG9EYXRhYmFzZShcImNvbm5lY3Rpb25cIixjb25uZWN0aW9uKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIHRoaXMuY29ubmVjdGlvbkFycmF5LnB1c2goY29ubmVjdGlvbik7XG4gICAgICAgIHN0b3JlVG9EYXRhYmFzZShcImNvbm5lY3Rpb25cIiwgY29ubmVjdGlvbik7XG4gICAgICAgIENvbm5lY3Rpb25CaW5hcnlUcmVlLmFkZENvbm5lY3Rpb25Ub1RyZWUoY29ubmVjdGlvbik7XG4gICAgICAgIENvbm5lY3Rpb25UeXBlVHJlZS5hZGRDb25uZWN0aW9uVG9UcmVlKGNvbm5lY3Rpb24pO1xuICAgIH1cbiAgICBzdGF0aWMgQWRkQ29ubmVjdGlvblRvTWVtb3J5KGNvbm5lY3Rpb24pIHtcbiAgICAgICAgQ29ubmVjdGlvbkJpbmFyeVRyZWUuYWRkQ29ubmVjdGlvblRvVHJlZShjb25uZWN0aW9uKTtcbiAgICAgICAgQ29ubmVjdGlvblR5cGVUcmVlLmFkZENvbm5lY3Rpb25Ub1RyZWUoY29ubmVjdGlvbik7XG4gICAgfVxuICAgIHN0YXRpYyBBZGRUb0RpY3Rpb25hcnkoY29ubmVjdGlvbikge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25EaWN0aW9uYXJ5W2Nvbm5lY3Rpb24uaWRdID0gY29ubmVjdGlvbjtcbiAgICB9XG4gICAgc3RhdGljIFJlbW92ZUNvbm5lY3Rpb24oY29ubmVjdGlvbikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29ubmVjdGlvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uQXJyYXlbaV0uaWQgPT0gY29ubmVjdGlvbi5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbkFycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29ubmVjdGlvbi5pZCAhPSAwKSB7XG4gICAgICAgICAgICByZW1vdmVGcm9tRGF0YWJhc2UoXCJjb25uZWN0aW9uXCIsIGNvbm5lY3Rpb24uaWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb25uZWN0aW9uVHJlZSgpIHtcbiAgICAgICAgcmV0dXJuIENvbm5lY3Rpb25CaW5hcnlUcmVlLmNvbm5lY3Rpb25yb290O1xuICAgIH1cbiAgICBzdGF0aWMgR2V0Q29ubmVjdGlvblR5cGVUcmVlKCkge1xuICAgICAgICByZXR1cm4gQ29ubmVjdGlvblR5cGVUcmVlLmNvbm5lY3Rpb25UeXBlUm9vdDtcbiAgICB9XG4gICAgc3RhdGljIEdldENvbm5lY3Rpb24oaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIC8vICAgIHZhciAgbXlDb25jZXB0OiBDb25uZWN0aW9ufG51bGw7XG4gICAgICAgICAgICAvLyAgICBteUNvbmNlcHQgPSBudWxsO1xuICAgICAgICAgICAgLy8gICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuY29ubmVjdGlvbkFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYodGhpcy5jb25uZWN0aW9uQXJyYXlbaV0uaWQgPT0gaWQpe1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbXlDb25jZXB0ID0gdGhpcy5jb25uZWN0aW9uQXJyYXlbaV07XG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIG15Q29uY2VwdDtcbiAgICAgICAgICAgIHZhciBteUNvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbigwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgICAgIHZhciBub2RlID0geWllbGQgQ29ubmVjdGlvbkJpbmFyeVRyZWUuZ2V0Tm9kZUZyb21UcmVlKGlkKTtcbiAgICAgICAgICAgIGlmIChub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZWRDb25jZXB0ID0gbm9kZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAocmV0dXJuZWRDb25jZXB0KSB7XG4gICAgICAgICAgICAgICAgICAgIG15Q29ubmVjdGlvbiA9IHJldHVybmVkQ29uY2VwdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZihteUNvbmNlcHQuaWQgPT0gMCB8fCBteUNvbmNlcHQgPT0gbnVsbCl7XG4gICAgICAgICAgICAvLyAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy5jb25jZXB0c0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYodGhpcy5jb25jZXB0c0FycmF5W2ldLmlkID09IGlkKXtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG15Q29uY2VwdCA9IHRoaXMuY29uY2VwdHNBcnJheVtpXTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHJldHVybiBteUNvbm5lY3Rpb247XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0Q29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uTG9jYWwoaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgdmFyIG5vZGUgPSB5aWVsZCBDb25uZWN0aW9uVHlwZVRyZWUuZ2V0Tm9kZUZyb21UcmVlKGlkKTtcbiAgICAgICAgICAgIGlmIChub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZWRDb25uZWN0aW9uID0gbm9kZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAocmV0dXJuZWRDb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBteUNvbm5lY3Rpb24gPSByZXR1cm5lZENvbm5lY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zLnB1c2gobXlDb25uZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLnZhcmlhbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucy5wdXNoKG5vZGUudmFyaWFudHNbaV0udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYobXlDb25jZXB0LmlkID09IDAgfHwgbXlDb25jZXB0ID09IG51bGwpe1xuICAgICAgICAgICAgLy8gICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuY29uY2VwdHNBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvLyAgICAgICAgIGlmKHRoaXMuY29uY2VwdHNBcnJheVtpXS5pZCA9PSBpZCl7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBteUNvbmNlcHQgPSB0aGlzLmNvbmNlcHRzQXJyYXlbaV07XG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICByZXR1cm4gY29ubmVjdGlvbnM7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbn1cbkNvbm5lY3Rpb25EYXRhLmNvbm5lY3Rpb25BcnJheSA9IFtdO1xuQ29ubmVjdGlvbkRhdGEuY29ubmVjdGlvbkRpY3Rpb25hcnkgPSBbXTtcbiIsImV4cG9ydCBjbGFzcyBJZGVudGlmaWVyRmxhZ3Mge1xufVxuSWRlbnRpZmllckZsYWdzLmlzVHlwZUxvYWRlZCA9IGZhbHNlO1xuSWRlbnRpZmllckZsYWdzLmlzQ2hhcmFjdGVyTG9hZGVkID0gZmFsc2U7XG5JZGVudGlmaWVyRmxhZ3MuaXNEYXRhTG9hZGVkID0gZmFsc2U7XG5JZGVudGlmaWVyRmxhZ3MuaXNMb2NhbERhdGFMb2FkZWQgPSBmYWxzZTtcbklkZW50aWZpZXJGbGFncy5pc0xvY2FsQ2hhcmFjdGVyTG9hZGVkID0gZmFsc2U7XG5JZGVudGlmaWVyRmxhZ3MuaXNMb2NhbFR5cGVMb2FkZWQgPSBmYWxzZTtcbklkZW50aWZpZXJGbGFncy5pc0Nvbm5lY3Rpb25Mb2FkZWQgPSBmYWxzZTtcbklkZW50aWZpZXJGbGFncy5pc0Nvbm5lY3Rpb25UeXBlTG9hZGVkID0gZmFsc2U7XG5JZGVudGlmaWVyRmxhZ3MuaXNMb2NhbENvbm5lY3Rpb25Mb2FkZWQgPSBmYWxzZTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgSWRlbnRpZmllckZsYWdzIH0gZnJvbSBcIi4vLi4vSWRlbnRpZmllckZsYWdzXCI7XG5pbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vLi4vTm9kZVwiO1xuZXhwb3J0IGNsYXNzIExvY2FsQmluYXJ5Q2hhcmFjdGVyVHJlZSB7XG4gICAgc3RhdGljIHdhaXRGb3JEYXRhVG9Mb2FkKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRmxhZyhyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwibm90XCIpO1xuICAgICAgICAgICAgICAgIH0sIDI1MDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGNoZWNrRmxhZyhyZXNvbHZlKSB7XG4gICAgICAgIGlmIChJZGVudGlmaWVyRmxhZ3MuaXNMb2NhbENoYXJhY3RlckxvYWRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoXCJkb25lXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChMb2NhbEJpbmFyeUNoYXJhY3RlclRyZWUuY2hlY2tGbGFnLCAxMDAwLCByZXNvbHZlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgc3RhdGljIGFkZE5vZGVUb1RyZWUobm9kZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLkxvY2FsQ2hhcmFjdGVyUm9vdCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5Mb2NhbENoYXJhY3RlclJvb3QgPSB0aGlzLkxvY2FsQ2hhcmFjdGVyUm9vdC5hZGRDaGFyYWN0ZXJOb2RlKG5vZGUsIHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290LCB0aGlzLkxvY2FsQ2hhcmFjdGVyUm9vdC5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGFkZENvbmNlcHRUb1RyZWUoY29uY2VwdCkge1xuICAgICAgICBpZiAoY29uY2VwdC5jaGFyYWN0ZXJWYWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBOb2RlKGNvbmNlcHQuY2hhcmFjdGVyVmFsdWUsIGNvbmNlcHQsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgdGhpcy5hZGROb2RlVG9UcmVlKG5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBnZXROb2RlRnJvbVRyZWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290KSB7XG4gICAgICAgICAgICB2YXIgTm9kZSA9IHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290LmdldENoYXJhY3RlckZyb21Ob2RlKHZhbHVlLCB0aGlzLkxvY2FsQ2hhcmFjdGVyUm9vdCk7XG4gICAgICAgICAgICByZXR1cm4gTm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5Mb2NhbENoYXJhY3RlclJvb3Q7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRDaGFyYWN0ZXJBbmRUeXBlRnJvbVRyZWUodmFsdWUsIHR5cGVJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHlpZWxkIHRoaXMud2FpdEZvckRhdGFUb0xvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLkxvY2FsQ2hhcmFjdGVyUm9vdCkge1xuICAgICAgICAgICAgICAgIHZhciBOb2RlID0gdGhpcy5Mb2NhbENoYXJhY3RlclJvb3QuZ2V0RnJvbU5vZGVXaXRoQ2hhcmFjdGVyQW5kVHlwZSh2YWx1ZSwgdHlwZUlkLCB0aGlzLkxvY2FsQ2hhcmFjdGVyUm9vdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Mb2NhbENoYXJhY3RlclJvb3Q7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgcmVtb3ZlQ29uY2VwdFR5cGUoY2hhcmFjdGVyLCBpZCkge1xuICAgICAgICBpZiAodGhpcy5Mb2NhbENoYXJhY3RlclJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290ID0gdGhpcy5Mb2NhbENoYXJhY3RlclJvb3QucmVtb3ZlTm9kZVdpdGhWYXJpYW50cyh0aGlzLkxvY2FsQ2hhcmFjdGVyUm9vdCwgY2hhcmFjdGVyLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5Mb2NhbEJpbmFyeUNoYXJhY3RlclRyZWUuTG9jYWxDaGFyYWN0ZXJSb290ID0gbnVsbDtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgSWRlbnRpZmllckZsYWdzIH0gZnJvbSBcIi4uL0lkZW50aWZpZXJGbGFnc1wiO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuLy4uL05vZGVcIjtcbmV4cG9ydCBjbGFzcyBMb2NhbEJpbmFyeVRyZWUge1xuICAgIHN0YXRpYyBhZGROb2RlVG9UcmVlKG5vZGUpIHtcbiAgICAgICAgaWYgKHRoaXMucm9vdCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBub2RlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IHRoaXMucm9vdC5hZGROb2RlKG5vZGUsIHRoaXMucm9vdCwgdGhpcy5yb290LmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGFkZENvbmNlcHRUb1RyZWUoY29uY2VwdCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBOb2RlKGNvbmNlcHQuaWQsIGNvbmNlcHQsIG51bGwsIG51bGwpO1xuICAgICAgICB2YXIgY2hhcmFjdGVyTm9kZSA9IG5ldyBOb2RlKGNvbmNlcHQuY2hhcmFjdGVyVmFsdWUsIGNvbmNlcHQsIG51bGwsIG51bGwpO1xuICAgICAgICB0aGlzLmFkZE5vZGVUb1RyZWUobm9kZSk7XG4gICAgfVxuICAgIHN0YXRpYyB3YWl0Rm9yRGF0YVRvTG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZsYWcocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIm5vdFwiKTtcbiAgICAgICAgICAgICAgICB9LCAyNTAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja0ZsYWcocmVzb2x2ZSkge1xuICAgICAgICBpZiAoSWRlbnRpZmllckZsYWdzLmlzTG9jYWxEYXRhTG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShcImRvbmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KExvY2FsQmluYXJ5VHJlZS5jaGVja0ZsYWcsIDEwMDAsIHJlc29sdmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBzdGF0aWMgZ2V0Tm9kZUZyb21UcmVlKGlkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0geWllbGQgdGhpcy53YWl0Rm9yRGF0YVRvTG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucm9vdCkge1xuICAgICAgICAgICAgICAgIHZhciBOb2RlID0gdGhpcy5yb290LmdldEZyb21Ob2RlKGlkLCB0aGlzLnJvb3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiBOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0Q2hhcmFjdGVyQW5kVHlwZUZyb21UcmVlKHZhbHVlLCB0eXBlSWQpIHtcbiAgICAgICAgaWYgKHRoaXMucm9vdCkge1xuICAgICAgICAgICAgdmFyIE5vZGUgPSB0aGlzLnJvb3QuZ2V0RnJvbU5vZGVXaXRoQ2hhcmFjdGVyQW5kVHlwZSh2YWx1ZSwgdHlwZUlkLCB0aGlzLnJvb3QpO1xuICAgICAgICAgICAgcmV0dXJuIE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdDtcbiAgICB9XG4gICAgc3RhdGljIHJlbW92ZU5vZGVGcm9tVHJlZShpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucm9vdCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdCA9IHRoaXMucm9vdC5yZW1vdmVOb2RlKHRoaXMucm9vdCwgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5Mb2NhbEJpbmFyeVRyZWUucm9vdCA9IG51bGw7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IElkZW50aWZpZXJGbGFncyB9IGZyb20gXCIuLy4uL0lkZW50aWZpZXJGbGFnc1wiO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuLy4uL05vZGVcIjtcbmV4cG9ydCBjbGFzcyBMb2NhbEJpbmFyeVR5cGVUcmVlIHtcbiAgICBzdGF0aWMgYWRkTm9kZVRvVHJlZShub2RlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5Mb2NhbFR5cGVSb290ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLkxvY2FsVHlwZVJvb3QgPSBub2RlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkxvY2FsVHlwZVJvb3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLkxvY2FsVHlwZVJvb3QgPSB0aGlzLkxvY2FsVHlwZVJvb3QuYWRkVHlwZU5vZGUobm9kZSwgdGhpcy5Mb2NhbFR5cGVSb290LCB0aGlzLkxvY2FsVHlwZVJvb3QuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLkxvY2FsVHlwZVJvb3Q7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KSB7XG4gICAgICAgIGlmIChjb25jZXB0LnR5cGVJZCAhPSAwKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBOb2RlKGNvbmNlcHQudHlwZUlkLCBjb25jZXB0LCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTm9kZVRvVHJlZShub2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgcmVtb3ZlQ29uY2VwdFR5cGUodHlwZUlkLCBpZCkge1xuICAgICAgICBpZiAodGhpcy5Mb2NhbFR5cGVSb290KSB7XG4gICAgICAgICAgICB0aGlzLkxvY2FsVHlwZVJvb3QgPSB0aGlzLkxvY2FsVHlwZVJvb3QucmVtb3ZlTm9kZVdpdGhWYXJpYW50cyh0aGlzLkxvY2FsVHlwZVJvb3QsIHR5cGVJZCwgaWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBnZXROb2RlRnJvbVRyZWUoaWQpIHtcbiAgICAgICAgaWYgKHRoaXMuTG9jYWxUeXBlUm9vdCkge1xuICAgICAgICAgICAgdmFyIE5vZGUgPSB0aGlzLkxvY2FsVHlwZVJvb3QuZ2V0RnJvbU5vZGUoaWQsIHRoaXMuTG9jYWxUeXBlUm9vdCk7XG4gICAgICAgICAgICByZXR1cm4gTm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5Mb2NhbFR5cGVSb290O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0VHlwZVZhcmlhbnRzRnJvbVRyZWUodHlwZUlkKSB7XG4gICAgICAgIHZhciBOb2RlID0gdGhpcy5nZXROb2RlRnJvbVRyZWUodHlwZUlkKTtcbiAgICAgICAgdmFyIGNvbmNlcHRzID0gW107XG4gICAgICAgIGlmIChOb2RlKSB7XG4gICAgICAgICAgICBjb25jZXB0cy5wdXNoKE5vZGUgPT09IG51bGwgfHwgTm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogTm9kZS52YWx1ZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5vZGUudmFyaWFudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25jZXB0cy5wdXNoKE5vZGUudmFyaWFudHNbaV0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbmNlcHRzO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyB3YWl0Rm9yRGF0YVRvTG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZsYWcocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIm5vdFwiKTtcbiAgICAgICAgICAgICAgICB9LCAyNTAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja0ZsYWcocmVzb2x2ZSkge1xuICAgICAgICBpZiAoSWRlbnRpZmllckZsYWdzLmlzTG9jYWxUeXBlTG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShcImRvbmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KExvY2FsQmluYXJ5VHlwZVRyZWUuY2hlY2tGbGFnLCAxMDAwLCByZXNvbHZlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgc3RhdGljIGdldFR5cGVWYXJpYW50c0Zyb21UcmVlV2l0aFVzZXJJZCh0eXBlSWQsIHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRzID0gW107XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0geWllbGQgdGhpcy53YWl0Rm9yRGF0YVRvTG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25jZXB0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBOb2RlID0gdGhpcy5nZXROb2RlRnJvbVRyZWUodHlwZUlkKTtcbiAgICAgICAgICAgIGlmIChOb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKE5vZGUudmFsdWUudXNlcklkID09IHVzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25jZXB0cy5wdXNoKE5vZGUgPT09IG51bGwgfHwgTm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogTm9kZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTm9kZS52YXJpYW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoTm9kZS52YXJpYW50c1tpXS52YWx1ZS51c2VySWQgPT0gdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25jZXB0cy5wdXNoKE5vZGUudmFyaWFudHNbaV0udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbmNlcHRzO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5Mb2NhbEJpbmFyeVR5cGVUcmVlLkxvY2FsVHlwZVJvb3QgPSBudWxsO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDb25jZXB0IH0gZnJvbSBcIi4vLi4vQ29uY2VwdFwiO1xuaW1wb3J0IHsgc3RvcmVUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uL0RhdGFiYXNlL2luZGV4ZGJsb2NhbFwiO1xuaW1wb3J0IHsgTG9jYWxCaW5hcnlUcmVlIH0gZnJvbSBcIi4vTG9jYWxCaW5hcnlUcmVlXCI7XG5pbXBvcnQgeyBMb2NhbEJpbmFyeUNoYXJhY3RlclRyZWUgfSBmcm9tIFwiLi9Mb2NhbEJpbmFyeUNoYXJhY3RlclRyZWVcIjtcbmltcG9ydCB7IExvY2FsQmluYXJ5VHlwZVRyZWUgfSBmcm9tIFwiLi9Mb2NhbEJpbmFyeVR5cGVUcmVlXCI7XG5leHBvcnQgY2xhc3MgTG9jYWxDb25jZXB0c0RhdGEge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBcImNvbmNlcHRzQXJyYXlcIjtcbiAgICB9XG4gICAgc3RhdGljIEFkZENvbmNlcHQoY29uY2VwdCkge1xuICAgICAgICBpZiAoY29uY2VwdC5pZCA+IDApIHtcbiAgICAgICAgICAgIHN0b3JlVG9EYXRhYmFzZShcImxvY2FsY29uY2VwdFwiLCBjb25jZXB0KTtcbiAgICAgICAgICAgIExvY2FsQmluYXJ5VHJlZS5hZGRDb25jZXB0VG9UcmVlKGNvbmNlcHQpO1xuICAgICAgICAgICAgTG9jYWxCaW5hcnlDaGFyYWN0ZXJUcmVlLmFkZENvbmNlcHRUb1RyZWUoY29uY2VwdCk7XG4gICAgICAgICAgICBMb2NhbEJpbmFyeVR5cGVUcmVlLmFkZENvbmNlcHRUb1RyZWUoY29uY2VwdCk7XG4gICAgICAgICAgICB0aGlzLmxvY2FsY29uY2VwdHNBcnJheS5wdXNoKGNvbmNlcHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBBZGRDb25jZXB0VG9NZW1vcnkoY29uY2VwdCkge1xuICAgICAgICBpZiAoY29uY2VwdC5pZCA+IDApIHtcbiAgICAgICAgICAgIExvY2FsQmluYXJ5VHJlZS5hZGRDb25jZXB0VG9UcmVlKGNvbmNlcHQpO1xuICAgICAgICAgICAgTG9jYWxCaW5hcnlDaGFyYWN0ZXJUcmVlLmFkZENvbmNlcHRUb1RyZWUoY29uY2VwdCk7XG4gICAgICAgICAgICBMb2NhbEJpbmFyeVR5cGVUcmVlLmFkZENvbmNlcHRUb1RyZWUoY29uY2VwdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEdldENvbmNlcHQoaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHZhciBteUNvbmNlcHQgPSBuZXcgQ29uY2VwdCgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCBcIjBcIiwgMCwgMCwgMCwgMCwgMCwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgdmFyIG5vZGUgPSB5aWVsZCBMb2NhbEJpbmFyeVRyZWUuZ2V0Tm9kZUZyb21UcmVlKGlkKTtcbiAgICAgICAgICAgIGlmIChub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZWRDb25jZXB0ID0gbm9kZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAocmV0dXJuZWRDb25jZXB0KSB7XG4gICAgICAgICAgICAgICAgICAgIG15Q29uY2VwdCA9IHJldHVybmVkQ29uY2VwdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbXlDb25jZXB0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIEdldENvbmNlcHRCeUNoYXJhY3RlcihjaGFyYWN0ZXJWYWx1ZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSBuZXcgQ29uY2VwdCgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCBcIjBcIiwgMCwgMCwgMCwgMCwgMCwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gIGZvcih2YXIgaT0wOyBpPHRoaXMuY29uY2VwdHNBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvLyAgICAgIGlmKHRoaXMuY29uY2VwdHNBcnJheVtpXS5jaGFyYWN0ZXJWYWx1ZSA9PSBjaGFyYWN0ZXJWYWx1ZSl7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbmNlcHQgPSB0aGlzLmNvbmNlcHRzQXJyYXlbaV07XG4gICAgICAgICAgICAvLyAgICAgIH1cbiAgICAgICAgICAgIC8vICB9XG4gICAgICAgICAgICB2YXIgTm9kZSA9IExvY2FsQmluYXJ5Q2hhcmFjdGVyVHJlZS5nZXROb2RlRnJvbVRyZWUoY2hhcmFjdGVyVmFsdWUpO1xuICAgICAgICAgICAgaWYgKE5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25jZXB0ID0gTm9kZS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIEdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGVMb2NhbChjaGFyYWN0ZXJfdmFsdWUsIHR5cGVJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSBuZXcgQ29uY2VwdCgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCBcIjBcIiwgMCwgMCwgMCwgMCwgMCwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gbGV0IGNvbmNlcHRMaXN0OkNvbmNlcHRbXSA9IGF3YWl0IHRoaXMuR2V0Q29uY2VwdHNCeVR5cGVJZCh0eXBlSWQpO1xuICAgICAgICAgICAgLy8gZm9yKHZhciBpPTA7aTxjb25jZXB0TGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvLyAgICAgaWYoY2hhcmFjdGVyX3ZhbHVlID09IGNvbmNlcHRMaXN0W2ldLmNoYXJhY3RlclZhbHVlKXtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRMaXN0W2ldO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHZhciBOb2RlID0geWllbGQgTG9jYWxCaW5hcnlDaGFyYWN0ZXJUcmVlLmdldENoYXJhY3RlckFuZFR5cGVGcm9tVHJlZShjaGFyYWN0ZXJfdmFsdWUsIHR5cGVJZCk7XG4gICAgICAgICAgICBpZiAoTm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbmNlcHQgPSBOb2RlLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0Q29uY2VwdHNCeVR5cGVJZCh0eXBlSWQpIHtcbiAgICAgICAgdmFyIG15Q29uY2VwdDtcbiAgICAgICAgbGV0IENvbmNlcHRMaXN0ID0gW107XG4gICAgICAgIG15Q29uY2VwdCA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sb2NhbGNvbmNlcHRzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsY29uY2VwdHNBcnJheVtpXS50eXBlSWQgPT0gdHlwZUlkKSB7XG4gICAgICAgICAgICAgICAgQ29uY2VwdExpc3QucHVzaCh0aGlzLmxvY2FsY29uY2VwdHNBcnJheVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIENvbmNlcHRMaXN0O1xuICAgIH1cbiAgICBzdGF0aWMgR2V0Q29uY2VwdHNCeVR5cGVJZEFuZFVzZXIodHlwZUlkLCB1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHZhciBteUNvbmNlcHQ7XG4gICAgICAgICAgICBsZXQgQ29uY2VwdExpc3QgPSBbXTtcbiAgICAgICAgICAgIC8vIG15Q29uY2VwdCA9IG51bGw7XG4gICAgICAgICAgICAvLyAgZm9yKHZhciBpPTA7IGk8dGhpcy5jb25jZXB0c0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIC8vICAgICAgaWYodGhpcy5jb25jZXB0c0FycmF5W2ldLnR5cGVJZCA9PSB0eXBlSWQgJiYgdGhpcy5jb25jZXB0c0FycmF5W2ldLnVzZXJJZCA9PSB1c2VySWQpe1xuICAgICAgICAgICAgLy8gICAgICAgICAgQ29uY2VwdExpc3QucHVzaCh0aGlzLmNvbmNlcHRzQXJyYXlbaV0pO1xuICAgICAgICAgICAgLy8gICAgICB9XG4gICAgICAgICAgICAvLyAgfVxuICAgICAgICAgICAgQ29uY2VwdExpc3QgPSB5aWVsZCBMb2NhbEJpbmFyeVR5cGVUcmVlLmdldFR5cGVWYXJpYW50c0Zyb21UcmVlV2l0aFVzZXJJZCh0eXBlSWQsIHVzZXJJZCk7XG4gICAgICAgICAgICByZXR1cm4gQ29uY2VwdExpc3Q7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbn1cbkxvY2FsQ29uY2VwdHNEYXRhLmxvY2FsY29uY2VwdHNBcnJheSA9IFtdO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBzdG9yZVRvRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vRGF0YWJhc2UvaW5kZXhkYmxvY2FsXCI7XG5pbXBvcnQgeyBJZGVudGlmaWVyRmxhZ3MgfSBmcm9tIFwiLi4vSWRlbnRpZmllckZsYWdzXCI7XG5leHBvcnQgY2xhc3MgTG9jYWxDb25uZWN0aW9uRGF0YSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiQ29ubmVjdGlvbiBBcnJheVwiO1xuICAgIH1cbiAgICBzdGF0aWMgQ2hlY2tDb250YWlucyhjb25uZWN0aW9uKSB7XG4gICAgICAgIHZhciBjb250YWlucyA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29ubmVjdGlvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uQXJyYXlbaV0uaWQgPT0gY29ubmVjdGlvbi5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGFpbnM7XG4gICAgfVxuICAgIHN0YXRpYyBBZGRDb25uZWN0aW9uKGNvbm5lY3Rpb24pIHtcbiAgICAgICAgdmFyIGNvbnRhaW5zID0gdGhpcy5DaGVja0NvbnRhaW5zKGNvbm5lY3Rpb24pO1xuICAgICAgICBpZiAoY29udGFpbnMpIHtcbiAgICAgICAgICAgIHRoaXMuUmVtb3ZlQ29ubmVjdGlvbihjb25uZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29ubmVjdGlvbi5pZCAhPSAwIHx8IGNvbm5lY3Rpb24uaXNUZW1wKSB7XG4gICAgICAgICAgICBzdG9yZVRvRGF0YWJhc2UoXCJsb2NhbGNvbm5lY3Rpb25cIiwgY29ubmVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25uZWN0aW9uQXJyYXkucHVzaChjb25uZWN0aW9uKTtcbiAgICB9XG4gICAgc3RhdGljIEFkZFRvRGljdGlvbmFyeShjb25uZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbkRpY3Rpb25hcnlbY29ubmVjdGlvbi5pZF0gPSBjb25uZWN0aW9uO1xuICAgIH1cbiAgICBzdGF0aWMgUmVtb3ZlQ29ubmVjdGlvbihjb25uZWN0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25BcnJheVtpXS5pZCA9PSBjb25uZWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb25uZWN0aW9uLmlkICE9IDApIHtcbiAgICAgICAgICAgIC8vICByZW1vdmVGcm9tRGF0YWJhc2UoXCJjb25uZWN0aW9uXCIsY29ubmVjdGlvbi5pZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEdldENvbm5lY3Rpb24oaWQpIHtcbiAgICAgICAgdmFyIG15Q29uY2VwdDtcbiAgICAgICAgbXlDb25jZXB0ID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbm5lY3Rpb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbkFycmF5W2ldLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgbXlDb25jZXB0ID0gdGhpcy5jb25uZWN0aW9uQXJyYXlbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG15Q29uY2VwdDtcbiAgICB9XG4gICAgc3RhdGljIHdhaXRGb3JEYXRhVG9Mb2FkKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRmxhZyhyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwibm90XCIpO1xuICAgICAgICAgICAgICAgIH0sIDI1MDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGNoZWNrRmxhZyhyZXNvbHZlKSB7XG4gICAgICAgIGlmIChJZGVudGlmaWVyRmxhZ3MuaXNMb2NhbENvbm5lY3Rpb25Mb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKFwiZG9uZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoTG9jYWxDb25uZWN0aW9uRGF0YS5jaGVja0ZsYWcsIDEwMDAsIHJlc29sdmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBzdGF0aWMgR2V0Q29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uTG9jYWwoaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uTGlzdCA9IFtdO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHlpZWxkIHRoaXMud2FpdEZvckRhdGFUb0xvYWQoKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29ubmVjdGlvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25BcnJheVtpXS50eXBlSWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25MaXN0LnB1c2godGhpcy5jb25uZWN0aW9uQXJyYXlbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjb25uZWN0aW9uTGlzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29ubmVjdGlvbkxpc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbn1cbkxvY2FsQ29ubmVjdGlvbkRhdGEuY29ubmVjdGlvbkFycmF5ID0gW107XG5Mb2NhbENvbm5lY3Rpb25EYXRhLmNvbm5lY3Rpb25EaWN0aW9uYXJ5ID0gW107XG4iLCJleHBvcnQgY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3Ioa2V5LCB2YWx1ZSwgbGVmdE5vZGUsIHJpZ2h0Tm9kZSkge1xuICAgICAgICB0aGlzLnZhcmlhbnRzID0gW107XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5sZWZ0Tm9kZSA9IGxlZnROb2RlO1xuICAgICAgICB0aGlzLnJpZ2h0Tm9kZSA9IHJpZ2h0Tm9kZTtcbiAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IG51bGw7XG4gICAgfVxuICAgIGFkZEN1cnJlbnROb2RlKHBhc3NlZE5vZGUsIG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZSA9IHBhc3NlZE5vZGU7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFzc2VkTm9kZS52YWx1ZS50eXBlSWQgIT0gbm9kZS52YWx1ZS50eXBlSWQpIHtcbiAgICAgICAgICAgIG5vZGUuY3VycmVudE5vZGUgPSB0aGlzLmFkZEN1cnJlbnROb2RlKHBhc3NlZE5vZGUsIG5vZGUuY3VycmVudE5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBhZGRDdXJyZW50Tm9kZVR5cGUocGFzc2VkTm9kZSwgbm9kZSkge1xuICAgICAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlID0gcGFzc2VkTm9kZTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb250YWlucyA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUudmFyaWFudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChub2RlLnZhcmlhbnRzW2ldLnZhbHVlLmlkID09IHBhc3NlZE5vZGUudmFsdWUuaWQpIHtcbiAgICAgICAgICAgICAgICBjb250YWlucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjb250YWlucykge1xuICAgICAgICAgICAgbm9kZS52YXJpYW50cy5wdXNoKHBhc3NlZE5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vbm9kZS5jdXJyZW50Tm9kZSA9IHRoaXMuYWRkQ3VycmVudE5vZGUocGFzc2VkTm9kZSwgbm9kZS5jdXJyZW50Tm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBhZGROb2RlKHBhc3NlZE5vZGUsIG5vZGUsIGhlaWdodCkge1xuICAgICAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlID0gcGFzc2VkTm9kZTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBMZWZ0Tm9kZSA9IG5vZGUubGVmdE5vZGU7XG4gICAgICAgIHZhciBSaWdodE5vZGUgPSBub2RlLnJpZ2h0Tm9kZTtcbiAgICAgICAgaWYgKG5vZGUua2V5ID4gcGFzc2VkTm9kZS5rZXkpIHtcbiAgICAgICAgICAgIG5vZGUubGVmdE5vZGUgPSB0aGlzLmFkZE5vZGUocGFzc2VkTm9kZSwgTGVmdE5vZGUsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobm9kZS5rZXkgPCBwYXNzZWROb2RlLmtleSkge1xuICAgICAgICAgICAgbm9kZS5yaWdodE5vZGUgPSB0aGlzLmFkZE5vZGUocGFzc2VkTm9kZSwgUmlnaHROb2RlLCBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVsc2UgaWYgKG5vZGUua2V5ID09IHBhc3NlZE5vZGUua2V5ICYmIG5vZGUua2V5ICE9IFwiXCIpe1xuICAgICAgICAvLyAgICAgbm9kZS5jdXJyZW50Tm9kZSA9IHBhc3NlZE5vZGU7XG4gICAgICAgIC8vIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLmhlaWdodCA9IDEgKyBNYXRoLm1heCh0aGlzLmdldEhlaWdodChub2RlLmxlZnROb2RlKSwgdGhpcy5nZXRIZWlnaHQobm9kZS5yaWdodE5vZGUpKTtcbiAgICAgICAgbGV0IGJhbGFuY2luZ0ZhY3RvciA9IHRoaXMuZ2V0QmFsYW5jZUZhY3Rvcihub2RlKTtcbiAgICAgICAgaWYgKGJhbGFuY2luZ0ZhY3RvciA+IDEpIHtcbiAgICAgICAgICAgIGlmIChub2RlLmxlZnROb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhc3NlZE5vZGUua2V5IDwgbm9kZS5sZWZ0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmlnaHRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhc3NlZE5vZGUua2V5ID4gbm9kZS5sZWZ0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sZWZ0Tm9kZSA9IHRoaXMubGVmdFJvdGF0ZShub2RlLmxlZnROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmlnaHRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChiYWxhbmNpbmdGYWN0b3IgPCAtMSkge1xuICAgICAgICAgICAgaWYgKG5vZGUucmlnaHROb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhc3NlZE5vZGUua2V5ID4gbm9kZS5yaWdodE5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxlZnRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhc3NlZE5vZGUua2V5IDwgbm9kZS5yaWdodE5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmlnaHROb2RlID0gdGhpcy5yaWdodFJvdGF0ZShub2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxlZnRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBhZGRDaGFyYWN0ZXJOb2RlKHBhc3NlZE5vZGUsIG5vZGUsIGhlaWdodCkge1xuICAgICAgICB2YXIgZGVidWdGbGFnID0gZmFsc2U7XG4gICAgICAgIGlmIChwYXNzZWROb2RlLnZhbHVlLmNoYXJhY3RlclZhbHVlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIC8vIGlmKHBhc3NlZE5vZGUudmFsdWUuY2hhcmFjdGVyVmFsdWUgPT0gXCJEZWZhdWx0XCIpe1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZGVmYXVsdCBoZXJlXCIpO1xuICAgICAgICAgICAgLy8gICAgIGRlYnVnRmxhZyA9IHRydWU7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVxdWFsIGhlcmVcIiwgbm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUgPSBwYXNzZWROb2RlO1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgKG5vZGUua2V5ID09IHBhc3NlZE5vZGUua2V5ICYmIG5vZGUua2V5ICE9IFwiXCIgKXtcbiAgICAgICAgICAgIC8vICAgICBpZihwYXNzZWROb2RlLnZhbHVlLmNoYXJhY3RlclZhbHVlID09IFwiRGVmYXVsdFwiKXtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJlcXVhbFwiKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgbm9kZS5jdXJyZW50Tm9kZSA9IHBhc3NlZE5vZGU7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB2YXIgTGVmdE5vZGUgPSBub2RlLmxlZnROb2RlO1xuICAgICAgICAgICAgdmFyIFJpZ2h0Tm9kZSA9IG5vZGUucmlnaHROb2RlO1xuICAgICAgICAgICAgaWYgKG5vZGUua2V5ID4gcGFzc2VkTm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGVmdCAgaGVyZVwiLCBub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZS5sZWZ0Tm9kZSA9IHRoaXMuYWRkQ2hhcmFjdGVyTm9kZShwYXNzZWROb2RlLCBMZWZ0Tm9kZSwgaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUua2V5IDwgcGFzc2VkTm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmlnaHQgaGVyZVwiLCBub2RlLCBSaWdodE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLnJpZ2h0Tm9kZSA9IHRoaXMuYWRkQ2hhcmFjdGVyTm9kZShwYXNzZWROb2RlLCBSaWdodE5vZGUsIGhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlbHNlIGlmIChub2RlLmtleSA9PSBwYXNzZWROb2RlLmtleSAmJiBub2RlLmtleSAhPSBcIlwiKXtcbiAgICAgICAgICAgIC8vICAgICBub2RlLmN1cnJlbnROb2RlID0gcGFzc2VkTm9kZTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbHNlIGhlcmVcIiwgbm9kZSwgcGFzc2VkTm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub2RlLmtleSA9PSBwYXNzZWROb2RlLmtleSAmJiBub2RlLmtleSAhPSBcIlwiICYmIG5vZGUudmFsdWUuaWQgIT0gcGFzc2VkTm9kZS52YWx1ZS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBub2RlLmN1cnJlbnROb2RlID0gdGhpcy5hZGRDdXJyZW50Tm9kZShwYXNzZWROb2RlLCBub2RlLmN1cnJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hZGRDdXJyZW50Tm9kZVR5cGUocGFzc2VkTm9kZSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5oZWlnaHQgPSAxICsgTWF0aC5tYXgodGhpcy5nZXRIZWlnaHQobm9kZS5sZWZ0Tm9kZSksIHRoaXMuZ2V0SGVpZ2h0KG5vZGUucmlnaHROb2RlKSk7XG4gICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWlnaHQgaGVyZVwiLCBub2RlLmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYmFsYW5jaW5nRmFjdG9yID0gdGhpcy5nZXRCYWxhbmNlRmFjdG9yKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFsYW5jaW5nRmFjdG9yIGhlcmVcIiwgYmFsYW5jaW5nRmFjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiYWxhbmNpbmdGYWN0b3IgPiAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubGVmdE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3NlZE5vZGUua2V5IDwgbm9kZS5sZWZ0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5lciA9IHRoaXMucmlnaHRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZSAxIFwiLCByZXR1cm5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5rZXkgPiBub2RlLmxlZnROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5sZWZ0Tm9kZSA9IHRoaXMubGVmdFJvdGF0ZShub2RlLmxlZnROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5lciA9IHRoaXMucmlnaHRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZSAyIFwiLCByZXR1cm5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYmFsYW5jaW5nRmFjdG9yIDwgLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5yaWdodE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3NlZE5vZGUua2V5ID4gbm9kZS5yaWdodE5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZXIgPSB0aGlzLmxlZnRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZSAzIFwiLCByZXR1cm5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5rZXkgPCBub2RlLnJpZ2h0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmlnaHROb2RlID0gdGhpcy5yaWdodFJvdGF0ZShub2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZXIgPSB0aGlzLmxlZnRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZTQgXCIsIHJldHVybmVyLCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5lcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndoYXQgaGVyZVwiLCBub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBoZXJlIDZcIiwgbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGFkZFR5cGVOb2RlKHBhc3NlZE5vZGUsIG5vZGUsIGhlaWdodCkge1xuICAgICAgICB2YXIgZGVidWdGbGFnID0gZmFsc2U7XG4gICAgICAgIGlmIChwYXNzZWROb2RlLnZhbHVlLnR5cGVJZCAhPSAwKSB7XG4gICAgICAgICAgICAvLyBpZihwYXNzZWROb2RlLnZhbHVlLmNoYXJhY3RlclZhbHVlID09IFwiRGVmYXVsdFwiKXtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImRlZmF1bHQgaGVyZVwiKTtcbiAgICAgICAgICAgIC8vICAgICBkZWJ1Z0ZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcXVhbCBoZXJlXCIsIG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlID0gcGFzc2VkTm9kZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBMZWZ0Tm9kZSA9IG5vZGUubGVmdE5vZGU7XG4gICAgICAgICAgICB2YXIgUmlnaHROb2RlID0gbm9kZS5yaWdodE5vZGU7XG4gICAgICAgICAgICBpZiAobm9kZS5rZXkgPiBwYXNzZWROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZWZ0ICBoZXJlXCIsIG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLmxlZnROb2RlID0gdGhpcy5hZGRUeXBlTm9kZShwYXNzZWROb2RlLCBMZWZ0Tm9kZSwgaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUua2V5IDwgcGFzc2VkTm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmlnaHQgaGVyZVwiLCBub2RlLCBSaWdodE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLnJpZ2h0Tm9kZSA9IHRoaXMuYWRkVHlwZU5vZGUocGFzc2VkTm9kZSwgUmlnaHROb2RlLCBoZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVsc2UgaGVyZVwiLCBub2RlLCBwYXNzZWROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUua2V5ID09IHBhc3NlZE5vZGUua2V5ICYmIG5vZGUua2V5ICE9IDAgJiYgbm9kZS52YWx1ZS5pZCAhPSBwYXNzZWROb2RlLnZhbHVlLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWRkQ3VycmVudE5vZGVUeXBlKHBhc3NlZE5vZGUsIG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUuaGVpZ2h0ID0gMSArIE1hdGgubWF4KHRoaXMuZ2V0SGVpZ2h0KG5vZGUubGVmdE5vZGUpLCB0aGlzLmdldEhlaWdodChub2RlLnJpZ2h0Tm9kZSkpO1xuICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVpZ2h0IGhlcmVcIiwgbm9kZS5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGJhbGFuY2luZ0ZhY3RvciA9IHRoaXMuZ2V0QmFsYW5jZUZhY3Rvcihub2RlKTtcbiAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJhbGFuY2luZ0ZhY3RvciBoZXJlXCIsIGJhbGFuY2luZ0ZhY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYmFsYW5jaW5nRmFjdG9yID4gMSkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmxlZnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXNzZWROb2RlLmtleSA8IG5vZGUubGVmdE5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZXIgPSB0aGlzLnJpZ2h0Um90YXRlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuaW5nIGhlcmUgMSBcIiwgcmV0dXJuZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldHVybmVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhc3NlZE5vZGUua2V5ID4gbm9kZS5sZWZ0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubGVmdE5vZGUgPSB0aGlzLmxlZnRSb3RhdGUobm9kZS5sZWZ0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZXIgPSB0aGlzLnJpZ2h0Um90YXRlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuaW5nIGhlcmUgMiBcIiwgcmV0dXJuZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldHVybmVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJhbGFuY2luZ0ZhY3RvciA8IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUucmlnaHROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXNzZWROb2RlLmtleSA+IG5vZGUucmlnaHROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVybmVyID0gdGhpcy5sZWZ0Um90YXRlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuaW5nIGhlcmUgMyBcIiwgcmV0dXJuZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldHVybmVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhc3NlZE5vZGUua2V5IDwgbm9kZS5yaWdodE5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJpZ2h0Tm9kZSA9IHRoaXMucmlnaHRSb3RhdGUobm9kZS5yaWdodE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVybmVyID0gdGhpcy5sZWZ0Um90YXRlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuaW5nIGhlcmU0IFwiLCByZXR1cm5lciwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3aGF0IGhlcmVcIiwgbm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZSA2XCIsIG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICByaWdodFJvdGF0ZSh5KSB7XG4gICAgICAgIGlmICh5KSB7XG4gICAgICAgICAgICBsZXQgeCA9IHkubGVmdE5vZGU7XG4gICAgICAgICAgICBpZiAoeCkge1xuICAgICAgICAgICAgICAgIGxldCBUMiA9IHgucmlnaHROb2RlO1xuICAgICAgICAgICAgICAgIHkubGVmdE5vZGUgPSBUMjtcbiAgICAgICAgICAgICAgICB4LnJpZ2h0Tm9kZSA9IHk7XG4gICAgICAgICAgICAgICAgeS5oZWlnaHQgPSBNYXRoLm1heCh0aGlzLmdldEhlaWdodCh5LmxlZnROb2RlKSwgdGhpcy5nZXRIZWlnaHQoeS5yaWdodE5vZGUpKSArIDE7XG4gICAgICAgICAgICAgICAgeC5oZWlnaHQgPSBNYXRoLm1heCh0aGlzLmdldEhlaWdodCh4LmxlZnROb2RlKSwgdGhpcy5nZXRIZWlnaHQoeC5yaWdodE5vZGUpKSArIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZXR1cm4geDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geTtcbiAgICB9XG4gICAgbGVmdFJvdGF0ZSh4KSB7XG4gICAgICAgIGlmICh4KSB7XG4gICAgICAgICAgICBsZXQgeSA9IHgucmlnaHROb2RlO1xuICAgICAgICAgICAgaWYgKHkpIHtcbiAgICAgICAgICAgICAgICBsZXQgVDIgPSB5LmxlZnROb2RlO1xuICAgICAgICAgICAgICAgIHkubGVmdE5vZGUgPSB4O1xuICAgICAgICAgICAgICAgIHgucmlnaHROb2RlID0gVDI7XG4gICAgICAgICAgICAgICAgeC5oZWlnaHQgPSBNYXRoLm1heCh0aGlzLmdldEhlaWdodCh4LmxlZnROb2RlKSwgdGhpcy5nZXRIZWlnaHQoeC5yaWdodE5vZGUpICsgMSk7XG4gICAgICAgICAgICAgICAgeS5oZWlnaHQgPSBNYXRoLm1heCh0aGlzLmdldEhlaWdodCh5LmxlZnROb2RlKSwgdGhpcy5nZXRIZWlnaHQoeC5yaWdodE5vZGUpICsgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3JldHVybiB5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICBnZXRIZWlnaHQobm9kZSkge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBnZXRCYWxhbmNlRmFjdG9yKE4pIHtcbiAgICAgICAgaWYgKE4gPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SGVpZ2h0KE4ubGVmdE5vZGUpIC0gdGhpcy5nZXRIZWlnaHQoTi5yaWdodE5vZGUpO1xuICAgIH1cbiAgICBnZXRGcm9tTm9kZShpZCwgbm9kZSkge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgaWYgKGlkID09IG5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpZCA8IG5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RnJvbU5vZGUoaWQsIG5vZGUubGVmdE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaWQgPiBub2RlLmtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEZyb21Ob2RlKGlkLCBub2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgZ2V0Q2hhcmFjdGVyRnJvbU5vZGUodmFsdWUsIG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBub2RlLmtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPCBub2RlLmtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENoYXJhY3RlckZyb21Ob2RlKHZhbHVlLCBub2RlLmxlZnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID4gbm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDaGFyYWN0ZXJGcm9tTm9kZSh2YWx1ZSwgbm9kZS5yaWdodE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGdldEZyb21Ob2RlV2l0aENoYXJhY3RlckFuZFR5cGUodmFsdWUsIHR5cGVJZCwgbm9kZSkge1xuICAgICAgICB2YWx1ZSA9IGAke3ZhbHVlfWA7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gbm9kZS52YWx1ZS5jaGFyYWN0ZXJWYWx1ZSAmJiB0eXBlSWQgPT0gbm9kZS52YWx1ZS50eXBlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUudmFyaWFudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnZhcmlhbnRzW2ldLnZhbHVlLnR5cGVJZCA9PSB0eXBlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS52YXJpYW50c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhpcy5nZXRGcm9tTm9kZVdpdGhDaGFyYWN0ZXJBbmRUeXBlKHZhbHVlLCB0eXBlSWQsIG5vZGUuY3VycmVudE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlIDwgbm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGcm9tTm9kZVdpdGhDaGFyYWN0ZXJBbmRUeXBlKHZhbHVlLCB0eXBlSWQsIG5vZGUubGVmdE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPiBub2RlLmtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEZyb21Ob2RlV2l0aENoYXJhY3RlckFuZFR5cGUodmFsdWUsIHR5cGVJZCwgbm9kZS5yaWdodE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHJlbW92ZU5vZGUocGFzc2VkTm9kZSwgaWQpIHtcbiAgICAgICAgaWYgKHBhc3NlZE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhc3NlZE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhc3NlZE5vZGUua2V5ID4gaWQpIHtcbiAgICAgICAgICAgIHBhc3NlZE5vZGUubGVmdE5vZGUgPSB0aGlzLnJlbW92ZU5vZGUocGFzc2VkTm9kZS5sZWZ0Tm9kZSwgaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHBhc3NlZE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5rZXkgPCBpZCkge1xuICAgICAgICAgICAgcGFzc2VkTm9kZS5yaWdodE5vZGUgPSB0aGlzLnJlbW92ZU5vZGUocGFzc2VkTm9kZS5yaWdodE5vZGUsIGlkKTtcbiAgICAgICAgICAgIHJldHVybiBwYXNzZWROb2RlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmKHBhc3NlZE5vZGUudmFyaWFudHMubGVuZ3RoID4gMCl7XG4gICAgICAgIC8vICAgICBpZihwYXNzZWROb2RlLnZhbHVlLmlkID09IGlkICl7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICB2YXIgbmV3Tm9kZSA9IHBhc3NlZE5vZGUudmFyaWFudHNbMF07XG4gICAgICAgIC8vICAgICBpZihuZXdOb2RlKXtcbiAgICAgICAgLy8gICAgICAgICBwYXNzZWROb2RlLnZhbHVlID0gbmV3Tm9kZS52YWx1ZTtcbiAgICAgICAgLy8gICAgICAgICBwYXNzZWROb2RlLmtleSA9IG5ld05vZGUua2V5O1xuICAgICAgICAvLyAgICAgICAgIHBhc3NlZE5vZGUuY3VycmVudE5vZGUgPSBuZXdOb2RlLmN1cnJlbnROb2RlO1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiBwYXNzZWROb2RlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIGlmIChwYXNzZWROb2RlLmxlZnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCB0ZW1wID0gcGFzc2VkTm9kZS5yaWdodE5vZGU7XG4gICAgICAgICAgICBwYXNzZWROb2RlID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhc3NlZE5vZGUucmlnaHROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCB0ZW1wID0gcGFzc2VkTm9kZS5sZWZ0Tm9kZTtcbiAgICAgICAgICAgIHBhc3NlZE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBwYXNzaW5nIHRoZSByaWdodE5vZGUgdG8gdGhlIGluT3JkZXJTdWNjZXNzb3IgZ2l2ZXMgdGhlIGltbWVkaWF0ZSBzdWNjZXNzb3Igb2YgdGhlIG5vZGVcbiAgICAgICAgICAgIHZhciBpbW1lZGlhdGVTdWNjZXNzb3IgPSB0aGlzLmluT3JkZXJTdWNjZXNzb3IocGFzc2VkTm9kZS5yaWdodE5vZGUpO1xuICAgICAgICAgICAgcGFzc2VkTm9kZS52YWx1ZSA9IGltbWVkaWF0ZVN1Y2Nlc3Nvci52YWx1ZTtcbiAgICAgICAgICAgIHBhc3NlZE5vZGUua2V5ID0gaW1tZWRpYXRlU3VjY2Vzc29yLmtleTtcbiAgICAgICAgICAgIHBhc3NlZE5vZGUudmFyaWFudHMgPSBpbW1lZGlhdGVTdWNjZXNzb3IudmFyaWFudHM7XG4gICAgICAgICAgICBwYXNzZWROb2RlLmN1cnJlbnROb2RlID0gaW1tZWRpYXRlU3VjY2Vzc29yLmN1cnJlbnROb2RlO1xuICAgICAgICAgICAgcGFzc2VkTm9kZS5yaWdodE5vZGUgPSB0aGlzLnJlbW92ZU5vZGUocGFzc2VkTm9kZS5yaWdodE5vZGUsIGltbWVkaWF0ZVN1Y2Nlc3Nvci5rZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHBhc3NlZE5vZGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlTm9kZVdpdGhWYXJpYW50cyhwYXNzZWROb2RlLCB0eXBlSWRlbnRpZmllciwgY29uY2VwdElkKSB7XG4gICAgICAgIGlmIChwYXNzZWROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXNzZWROb2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXNzZWROb2RlLmtleSA+IHR5cGVJZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBwYXNzZWROb2RlLmxlZnROb2RlID0gdGhpcy5yZW1vdmVOb2RlV2l0aFZhcmlhbnRzKHBhc3NlZE5vZGUubGVmdE5vZGUsIHR5cGVJZGVudGlmaWVyLCBjb25jZXB0SWQpO1xuICAgICAgICAgICAgcmV0dXJuIHBhc3NlZE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5rZXkgPCB0eXBlSWRlbnRpZmllcikge1xuICAgICAgICAgICAgcGFzc2VkTm9kZS5yaWdodE5vZGUgPSB0aGlzLnJlbW92ZU5vZGVXaXRoVmFyaWFudHMocGFzc2VkTm9kZS5yaWdodE5vZGUsIHR5cGVJZGVudGlmaWVyLCBjb25jZXB0SWQpO1xuICAgICAgICAgICAgcmV0dXJuIHBhc3NlZE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhc3NlZE5vZGUudmFyaWFudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy9jb25kaXRpb24gaWYgdGhlIG1haW4gbm9kZSBpcyBlcXVhbCB0byB0aGUgdmFsdWVcbiAgICAgICAgICAgIGlmIChwYXNzZWROb2RlLnZhbHVlLmlkID09IGNvbmNlcHRJZCkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdOb2RlID0gcGFzc2VkTm9kZS52YXJpYW50c1swXTtcbiAgICAgICAgICAgICAgICBpZiAobmV3Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBwYXNzZWROb2RlLnZhbHVlID0gbmV3Tm9kZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcGFzc2VkTm9kZS5rZXkgPSBuZXdOb2RlLmtleTtcbiAgICAgICAgICAgICAgICAgICAgcGFzc2VkTm9kZS5jdXJyZW50Tm9kZSA9IG5ld05vZGUuY3VycmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIHBhc3NlZE5vZGUudmFyaWFudHMuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFzc2VkTm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpbiB0aGUgY29uZGl0aW9uIHRoYXQgdGhlIG1haW4gbm9kZSBpcyBub3QgZXF1YWwgdG8gdGhlIGNoZWNraW5nIHZhbHVlIFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFzc2VkTm9kZS52YXJpYW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uY2VwdElkID09IHBhc3NlZE5vZGUudmFyaWFudHNbaV0udmFsdWUuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NlZE5vZGUudmFyaWFudHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhc3NlZE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhc3NlZE5vZGUubGVmdE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHRlbXAgPSBwYXNzZWROb2RlLnJpZ2h0Tm9kZTtcbiAgICAgICAgICAgIHBhc3NlZE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5yaWdodE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHRlbXAgPSBwYXNzZWROb2RlLmxlZnROb2RlO1xuICAgICAgICAgICAgcGFzc2VkTm9kZSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHBhc3NpbmcgdGhlIHJpZ2h0Tm9kZSB0byB0aGUgaW5PcmRlclN1Y2Nlc3NvciBnaXZlcyB0aGUgaW1tZWRpYXRlIHN1Y2Nlc3NvciBvZiB0aGUgbm9kZVxuICAgICAgICAgICAgdmFyIGltbWVkaWF0ZVN1Y2Nlc3NvciA9IHRoaXMuaW5PcmRlclN1Y2Nlc3NvcihwYXNzZWROb2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICBwYXNzZWROb2RlLnZhbHVlID0gaW1tZWRpYXRlU3VjY2Vzc29yLnZhbHVlO1xuICAgICAgICAgICAgcGFzc2VkTm9kZS5rZXkgPSBpbW1lZGlhdGVTdWNjZXNzb3Iua2V5O1xuICAgICAgICAgICAgcGFzc2VkTm9kZS52YXJpYW50cyA9IGltbWVkaWF0ZVN1Y2Nlc3Nvci52YXJpYW50cztcbiAgICAgICAgICAgIHBhc3NlZE5vZGUuY3VycmVudE5vZGUgPSBpbW1lZGlhdGVTdWNjZXNzb3IuY3VycmVudE5vZGU7XG4gICAgICAgICAgICBwYXNzZWROb2RlLnJpZ2h0Tm9kZSA9IHRoaXMucmVtb3ZlTm9kZVdpdGhWYXJpYW50cyhwYXNzZWROb2RlLnJpZ2h0Tm9kZSwgaW1tZWRpYXRlU3VjY2Vzc29yLmtleSwgY29uY2VwdElkKTtcbiAgICAgICAgICAgIHJldHVybiBwYXNzZWROb2RlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvdW50Tm9kZUJlbG93KHJvb3QpIHtcbiAgICAgICAgaWYgKHJvb3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgLy9yZWN1cnNpdmUgY2FsbCB0byBsZWZ0IGNoaWxkIGFuZCByaWdodCBjaGlsZCBhbmRcbiAgICAgICAgLy8gYWRkIHRoZSByZXN1bHQgb2YgdGhlc2Ugd2l0aCAxICggMSBmb3IgY291bnRpbmcgdGhlIHJvb3QpXG4gICAgICAgIHJldHVybiAxICsgdGhpcy5jb3VudE5vZGVCZWxvdyhyb290LmxlZnROb2RlKSArIHRoaXMuY291bnROb2RlQmVsb3cocm9vdC5yaWdodE5vZGUpO1xuICAgIH1cbiAgICBpbk9yZGVyU3VjY2Vzc29yKHJvb3QpIHtcbiAgICAgICAgd2hpbGUgKHJvb3QubGVmdE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgcm9vdCA9IHJvb3QubGVmdE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBHZXRSZXNlcnZlZElkcyB9IGZyb20gXCIuLi9BcGkvR2V0UmVzZXJ2ZWRJZHNcIjtcbmV4cG9ydCBjbGFzcyBSZXNlcnZlZElkcyB7XG4gICAgc3RhdGljIGdldElkKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaWRzLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWRzID0geWllbGQgR2V0UmVzZXJ2ZWRJZHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpZCA9IHRoaXMuaWRzWzBdO1xuICAgICAgICAgICAgdGhpcy5pZHMuc2hpZnQoKTtcbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBBZGRJZChpZCkge1xuICAgICAgICBpZiAoIXRoaXMuaWRzLmluY2x1ZGVzKGlkKSkge1xuICAgICAgICAgICAgdGhpcy5pZHMucHVzaChpZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5SZXNlcnZlZElkcy5pZHMgPSBbXTtcbiIsImV4cG9ydCBjbGFzcyBSZXR1cm5lciB7XG4gICAgY29uc3RydWN0b3IoaWQsIHVzZXJJZCwgcmVmZXJlbnRJZCwgaXNOZXcpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdGhpcy5yZWZlcmVudElkID0gcmVmZXJlbnRJZDtcbiAgICAgICAgdGhpcy5pc05ldyA9IGlzTmV3O1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTZWFyY2hRdWVyeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29tcG9zaXRpb24gPSAwO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlwiO1xuICAgICAgICB0aGlzLmxpbmtlciA9IFwiXCI7XG4gICAgICAgIHRoaXMuaW5wYWdlID0gMTA7XG4gICAgICAgIHRoaXMucGFnZSA9IDE7XG4gICAgICAgIHRoaXMubGlzdExpbmtlcnMgPSBbXTtcbiAgICAgICAgdGhpcy50ZXh0U2VhcmNoID0gXCJcIjtcbiAgICAgICAgdGhpcy5sb2dpYyA9IFwib3JcIjtcbiAgICAgICAgdGhpcy5maWx0ZXJTZWFyY2hlcyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdG9ycyA9IFtdO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTZXR0aW5nRGF0YSB7XG4gICAgY29uc3RydWN0b3IoaXNPbmxpbmVTeW5jKSB7XG4gICAgICAgIHRoaXMuaWQgPSAxO1xuICAgICAgICB0aGlzLmlzT25saW5lU3luYyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzT25saW5lU3luYyA9IGlzT25saW5lU3luYztcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2V0dGluZ3Mge1xufVxuU2V0dGluZ3MuaXNVcGRhdGVkID0gZmFsc2U7XG5TZXR0aW5ncy5pc09ubGluZVN5bmMgPSBmYWxzZTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgc3RvcmVUb0RhdGFiYXNlIH0gZnJvbSBcIi4vLi4vRGF0YWJhc2UvaW5kZXhlZGRiXCI7XG5pbXBvcnQgeyBDcmVhdGVUaGVDb25jZXB0QXBpIH0gZnJvbSBcIi4uL0FwaS9DcmVhdGUvQ3JlYXRlVGhlQ29uY2VwdEFwaVwiO1xuaW1wb3J0IHsgQ3JlYXRlVGhlQ29ubmVjdGlvbkFwaSB9IGZyb20gXCIuLi9BcGkvQ3JlYXRlL0NyZWF0ZVRoZUNvbm5lY3Rpb25BcGlcIjtcbmltcG9ydCB7IENvbmNlcHRzRGF0YSB9IGZyb20gXCIuL0NvbmNlcHREYXRhXCI7XG5pbXBvcnQgeyBDb25uZWN0aW9uRGF0YSB9IGZyb20gXCIuL0Nvbm5lY3Rpb25EYXRhXCI7XG5leHBvcnQgY2xhc3MgU3luY0RhdGEge1xuICAgIHN0YXRpYyBDaGVja0NvbnRhaW5zKGNvbmNlcHQpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5zID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25jZXB0c1N5bmNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uY2VwdHNTeW5jQXJyYXlbaV0uaWQgPT0gY29uY2VwdC5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGFpbnM7XG4gICAgfVxuICAgIHN0YXRpYyBTeW5jRGF0YURlbGV0ZShpZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29uY2VwdHNTeW5jQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpZCA9PSB0aGlzLmNvbmNlcHRzU3luY0FycmF5W2ldLmlkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBkZWxldGluZyBvZiBcIiwgdGhpcy5jb25jZXB0c1N5bmNBcnJheVtpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25jZXB0c1N5bmNBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXlbaV0ub2ZUaGVDb25jZXB0SWQgPT0gaWQgfHwgdGhpcy5jb25uZWN0aW9uU3luY0FycmF5W2ldLnRvVGhlQ29uY2VwdElkID09IGlkIHx8IHRoaXMuY29ubmVjdGlvblN5bmNBcnJheVtpXS50eXBlSWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBDaGVja0NvbnRhaW5zQ29ubmVjdGlvbihjb25uZWN0aW9uKSB7XG4gICAgICAgIHZhciBjb250YWlucyA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29ubmVjdGlvblN5bmNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN5bmNBcnJheVtpXS5pZCA9PSBjb25uZWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWlucztcbiAgICB9XG4gICAgc3RhdGljIEFkZENvbmNlcHQoY29uY2VwdCkge1xuICAgICAgICB2YXIgY29udGFpbnMgPSBmYWxzZTtcbiAgICAgICAgLy8gQ29uY2VwdHNEYXRhLkFkZENvbmNlcHRUZW1wb3JhcnkoY29uY2VwdCk7XG4gICAgICAgIGlmICghY29udGFpbnMpIHtcbiAgICAgICAgICAgIHRoaXMuY29uY2VwdHNTeW5jQXJyYXkucHVzaChjb25jZXB0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgUmVtb3ZlQ29uY2VwdChjb25jZXB0KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25jZXB0c1N5bmNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uY2VwdHNTeW5jQXJyYXlbaV0uaWQgPT0gY29uY2VwdC5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uY2VwdHNTeW5jQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBBZGRDb25uZWN0aW9uKGNvbm5lY3Rpb24pIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uU3luY0FycmF5LnB1c2goY29ubmVjdGlvbik7XG4gICAgfVxuICAgIHN0YXRpYyBSZW1vdmVDb25uZWN0aW9uKGNvbm5lY3Rpb24pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXlbaV0uaWQgPT0gY29ubmVjdGlvbi5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblN5bmNBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIFN5bmNEYXRhT25saW5lKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbmNlcHRzU3luY0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgQ29uY2VwdHNEYXRhLkFkZENvbmNlcHQodGhpcy5jb25jZXB0c1N5bmNBcnJheVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29ubmVjdGlvblN5bmNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIENvbm5lY3Rpb25EYXRhLkFkZENvbm5lY3Rpb24odGhpcy5jb25uZWN0aW9uU3luY0FycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmNlcHRzU3luY0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBDcmVhdGVUaGVDb25jZXB0QXBpKHRoaXMuY29uY2VwdHNTeW5jQXJyYXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uY2VwdHNTeW5jQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIENyZWF0ZVRoZUNvbm5lY3Rpb25BcGkodGhpcy5jb25uZWN0aW9uU3luY0FycmF5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcImRvbmVcIjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBzeW5jRGF0YUxvY2FsRGIoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25jZXB0c1N5bmNBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbmNlcHRzU3luY0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlVG9EYXRhYmFzZShcImxvY2FsY29uY2VwdFwiLCB0aGlzLmNvbmNlcHRzU3luY0FycmF5W2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jb25jZXB0c1N5bmNBcnJheSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN5bmNBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVUb0RhdGFiYXNlKFwibG9jYWxjb25uZWN0aW9uXCIsIHRoaXMuY29ubmVjdGlvblN5bmNBcnJheVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblN5bmNBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29ubmVjdGlvblN5bmNBcnJheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJkb25lXCI7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblN5bmNEYXRhLmNvbmNlcHRzU3luY0FycmF5ID0gW107XG5TeW5jRGF0YS5jb25uZWN0aW9uU3luY0FycmF5ID0gW107XG4iLCJleHBvcnQgY2xhc3MgVGhlQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih1c2VySWQsIGRhdGEsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQsIGVudHJ5VGltZXN0YW1wLCBpc05ldykge1xuICAgICAgICB0aGlzLmlkID0gMDtcbiAgICAgICAgdGhpcy5pc05ldyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdGhpcy5kYXRhID0gYCR7ZGF0YX1gO1xuICAgICAgICB0aGlzLnNlY3VyaXR5SWQgPSBzZWN1cml0eUlkO1xuICAgICAgICB0aGlzLnNlY3VyaXR5VXNlcklkID0gc2VjdXJpdHlVc2VySWQ7XG4gICAgICAgIHRoaXMuYWNjZXNzSWQgPSBhY2Nlc3NJZDtcbiAgICAgICAgdGhpcy5hY2Nlc3NVc2VySWQgPSBhY2Nlc3NVc2VySWQ7XG4gICAgICAgIHRoaXMuc2Vzc2lvbklkID0gc2Vzc2lvbklkO1xuICAgICAgICB0aGlzLnNlc3Npb25Vc2VySWQgPSBzZXNzaW9uVXNlcklkO1xuICAgICAgICB0aGlzLmlzTmV3ID0gaXNOZXc7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFRoZVRleHRzIHtcbiAgICBjb25zdHJ1Y3Rvcih1c2VySWQsIGRhdGEsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQsIGVudHJ5VGltZXN0YW1wLCBpc05ldykge1xuICAgICAgICB0aGlzLmlkID0gMDtcbiAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuc2VjdXJpdHlJZCA9IHNlY3VyaXR5SWQ7XG4gICAgICAgIHRoaXMuc2VjdXJpdHlVc2VySWQgPSBzZWN1cml0eVVzZXJJZDtcbiAgICAgICAgdGhpcy5hY2Nlc3NJZCA9IGFjY2Vzc0lkO1xuICAgICAgICB0aGlzLmFjY2Vzc1VzZXJJZCA9IGFjY2Vzc1VzZXJJZDtcbiAgICAgICAgdGhpcy5zZXNzaW9uSWQgPSBzZXNzaW9uSWQ7XG4gICAgICAgIHRoaXMuc2Vzc2lvblVzZXJJZCA9IHNlc3Npb25Vc2VySWQ7XG4gICAgICAgIHRoaXMuZW50cnlUaW1lc3RhbXAgPSBlbnRyeVRpbWVzdGFtcDtcbiAgICAgICAgdGhpcy5pc05ldyA9IGlzTmV3O1xuICAgIH1cbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIHZlcnNpb24gPSA0O1xuZXhwb3J0IGNsYXNzIExvY2FsSW5kZXhEYiB7XG59XG5leHBvcnQgZnVuY3Rpb24gb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmIChMb2NhbEluZGV4RGIuZGIpIHtcbiAgICAgICAgICAgIHJlc29sdmUoTG9jYWxJbmRleERiLmRiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oXCJGcmVlU2NoZW1hTG9jYWxcIiwgdmVyc2lvbik7XG4gICAgICAgIHJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIldoeSBkaWRuJ3QgeW91IGFsbG93IG15IHdlYiBhcHAgdG8gdXNlIEluZGV4ZWREQj8hXCIpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIExvY2FsSW5kZXhEYi5kYiA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICByZXNvbHZlKExvY2FsSW5kZXhEYi5kYik7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGRiID0gdGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIHZhciBjb25jZXB0RGIgPSBcImxvY2FsY29uY2VwdFwiO1xuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb25EYiA9IFwibG9jYWxjb25uZWN0aW9uXCI7XG4gICAgICAgICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoY29uY2VwdERiKSkgeyAvLyBpZiB0aGVyZSdzIG5vIGRhdGFiYXNlIG5hbWVcbiAgICAgICAgICAgICAgICBsZXQgb2JqZWN0U3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZShjb25jZXB0RGIsIHsga2V5UGF0aDogJ2lkJyB9KTsgLy8gY3JlYXRlIGl0XG4gICAgICAgICAgICAgICAgb2JqZWN0U3RvcmUudHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoY29ubmVjdGlvbkRiKSkgeyAvLyBpZiB0aGVyZSdzIG5vIGRhdGFiYXNlIG5hbWVcbiAgICAgICAgICAgICAgICBsZXQgb2JqZWN0U3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZShjb25uZWN0aW9uRGIsIHsga2V5UGF0aDogJ2lkJyB9KTsgLy8gY3JlYXRlIGl0XG4gICAgICAgICAgICAgICAgb2JqZWN0U3RvcmUudHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc3RvcmVUb0RhdGFiYXNlKGRhdGFiYXNlTmFtZSwgb2JqZWN0KSB7XG4gICAgb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSk7XG4gICAgbGV0IGRiO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihcIkZyZWVTY2hlbWFMb2NhbFwiLCB2ZXJzaW9uKTtcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIldoeSBkaWRuJ3QgeW91IGFsbG93IG15IHdlYiBhcHAgdG8gdXNlIEluZGV4ZWREQj8hXCIpO1xuICAgIH07XG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgdmFyIGRiID0gdGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oZGF0YWJhc2VOYW1lLCBcInJlYWR3cml0ZVwiKTtcbiAgICAgICAgbGV0IG9ialN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoZGF0YWJhc2VOYW1lKTtcbiAgICAgICAgb2JqU3RvcmUuYWRkKG9iamVjdCk7XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxGcm9tTG9jYWxEYihkYXRhYmFzZU5hbWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIENvbmNlcHRMaXN0ID0gW107XG4gICAgICAgICAgICBvcGVuRGF0YWJhc2UoZGF0YWJhc2VOYW1lKS50aGVuKGRiID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBMb2NhbEluZGV4RGIuZGIudHJhbnNhY3Rpb24oZGF0YWJhc2VOYW1lLCBcInJlYWR3cml0ZVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShkYXRhYmFzZU5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciBhbGxvYmplY3RzID0gb2JqZWN0U3RvcmUuZ2V0QWxsKCk7XG4gICAgICAgICAgICAgICAgYWxsb2JqZWN0cy5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0dWRlbnRzID0gYWxsb2JqZWN0cy5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R1ZGVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmNlcHRMaXN0LnB1c2goc3R1ZGVudHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoQ29uY2VwdExpc3QpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vICAgLy8gRGF0YWJhc2Ugb3BlbmVkIHN1Y2Nlc3NmdWxseVxuICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHJldHVybiBDb25jZXB0TGlzdDtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGcm9tRGF0YWJhc2UoZGF0YWJhc2VOYW1lLCBpZCkge1xuICAgIG9wZW5EYXRhYmFzZShkYXRhYmFzZU5hbWUpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihcIkZyZWVTY2hlbWFMb2NhbFwiLCB2ZXJzaW9uKTtcbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB2YXIgZGIgPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihkYXRhYmFzZU5hbWUsIFwicmVhZHdyaXRlXCIpO1xuICAgICAgICBsZXQgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShkYXRhYmFzZU5hbWUpO1xuICAgICAgICBsZXQgZ2V0UmVxdWVzdCA9IG9iamVjdFN0b3JlLmRlbGV0ZShpZCk7XG4gICAgICAgIGdldFJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgLy8gY29uY2VwdCA9ICBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgLy8gQWNjZXNzIHRoZSByZXRyaWV2ZWQgZGF0YVxuICAgICAgICB9O1xuICAgIH07XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IFNldHRpbmdEYXRhIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL1NldHRpbmdEYXRhXCI7XG5pbXBvcnQgeyBCYXNlVXJsIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Jhc2VVcmxcIjtcbnZhciB2ZXJzaW9uID0gNDtcbmV4cG9ydCBjbGFzcyBJbmRleERiIHtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvcGVuRGF0YWJhc2UoZGF0YWJhc2VOYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaWYgKEluZGV4RGIuZGIpIHtcbiAgICAgICAgICAgIHJlc29sdmUoSW5kZXhEYi5kYik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKEJhc2VVcmwuQkFTRV9VUkwgKyBcIl9GcmVlU2NoZW1hXCIsIHZlcnNpb24pO1xuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJXaHkgZGlkbid0IHlvdSBhbGxvdyBteSB3ZWIgYXBwIHRvIHVzZSBJbmRleGVkREI/IVwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBJbmRleERiLmRiID0gdGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIHJlc29sdmUoSW5kZXhEYi5kYik7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGRiID0gdGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIHZhciBjb25jZXB0RGIgPSBcImNvbmNlcHRcIjtcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uRGIgPSBcImNvbm5lY3Rpb25cIjtcbiAgICAgICAgICAgIHZhciBzZXR0aW5ncyA9IFwic2V0dGluZ3NcIjtcbiAgICAgICAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhjb25jZXB0RGIpKSB7IC8vIGlmIHRoZXJlJ3Mgbm8gZGF0YWJhc2UgbmFtZVxuICAgICAgICAgICAgICAgIGxldCBvYmplY3RTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKGNvbmNlcHREYiwgeyBrZXlQYXRoOiAnaWQnIH0pOyAvLyBjcmVhdGUgaXRcbiAgICAgICAgICAgICAgICBvYmplY3RTdG9yZS50cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3JlIHZhbHVlcyBpbiB0aGUgbmV3bHkgY3JlYXRlZCBvYmplY3RTdG9yZS5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgbXlPYmplY3RTdG9yZSA9IGRiXG4gICAgICAgICAgICAgICAgICAgIC8vIC50cmFuc2FjdGlvbihkYXRhYmFzZU5hbWUsIFwicmVhZHdyaXRlXCIpXG4gICAgICAgICAgICAgICAgICAgIC8vIC5vYmplY3RTdG9yZShkYXRhYmFzZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBteU9iamVjdFN0b3JlLmFkZChvYmplY3QpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoY29ubmVjdGlvbkRiKSkgeyAvLyBpZiB0aGVyZSdzIG5vIGRhdGFiYXNlIG5hbWVcbiAgICAgICAgICAgICAgICBsZXQgb2JqZWN0U3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZShjb25uZWN0aW9uRGIsIHsga2V5UGF0aDogJ2lkJyB9KTsgLy8gY3JlYXRlIGl0XG4gICAgICAgICAgICAgICAgb2JqZWN0U3RvcmUudHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoc2V0dGluZ3MpKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdFN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUoc2V0dGluZ3MsIHsga2V5UGF0aDogJ2lkJyB9KTsgLy8gY3JlYXRlIGl0XG4gICAgICAgICAgICAgICAgb2JqZWN0U3RvcmUudHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc3RvcmVUb0RhdGFiYXNlKGRhdGFiYXNlTmFtZSwgb2JqZWN0KSB7XG4gICAgb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSkudGhlbigoKSA9PiB7XG4gICAgICAgIGlmIChvYmplY3QuaWQgIT0gMCkge1xuICAgICAgICAgICAgLy92YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIElEQk9wZW5EQlJlcXVlc3Q7XG4gICAgICAgICAgICB2YXIgZGIgPSBJbmRleERiLmRiO1xuICAgICAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oZGF0YWJhc2VOYW1lLCBcInJlYWR3cml0ZVwiKTtcbiAgICAgICAgICAgIGxldCBvYmpTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKGRhdGFiYXNlTmFtZSk7XG4gICAgICAgICAgICBvYmpTdG9yZS5hZGQob2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGV2ZW50KSA9PiB7XG4gICAgLy8gICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSURCT3BlbkRCUmVxdWVzdDtcbiAgICAvLyAgICAgdmFyIGRiID0gdGFyZ2V0LnJlc3VsdCBhcyBJREJEYXRhYmFzZTtcbiAgICAvLyAgICAgdmFyIGNvbmNlcHREYiA9IFwiY29uY2VwdFwiO1xuICAgIC8vICAgICB2YXIgY29ubmVjdGlvbkRiID0gXCJjb25uZWN0aW9uXCI7XG4gICAgLy8gICAgIHZhciBzZXR0aW5ncyA9IFwic2V0dGluZ3NcIlxuICAgIC8vICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoY29uY2VwdERiKSkgeyAvLyBpZiB0aGVyZSdzIG5vIGRhdGFiYXNlIG5hbWVcbiAgICAvLyAgICAgICBsZXQgIG9iamVjdFN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUoY29uY2VwdERiLCB7a2V5UGF0aDogJ2lkJ30pOyAvLyBjcmVhdGUgaXRcbiAgICAvLyAgICAgICBvYmplY3RTdG9yZS50cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIC8vIFN0b3JlIHZhbHVlcyBpbiB0aGUgbmV3bHkgY3JlYXRlZCBvYmplY3RTdG9yZS5cbiAgICAvLyAgICAgICAgICAgICAvLyBjb25zdCBteU9iamVjdFN0b3JlID0gZGJcbiAgICAvLyAgICAgICAgICAgICAvLyAudHJhbnNhY3Rpb24oZGF0YWJhc2VOYW1lLCBcInJlYWR3cml0ZVwiKVxuICAgIC8vICAgICAgICAgICAgIC8vIC5vYmplY3RTdG9yZShkYXRhYmFzZU5hbWUpO1xuICAgIC8vICAgICAgICAgICAgIC8vIG15T2JqZWN0U3RvcmUuYWRkKG9iamVjdCk7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhjb25uZWN0aW9uRGIpKSB7IC8vIGlmIHRoZXJlJ3Mgbm8gZGF0YWJhc2UgbmFtZVxuICAgIC8vICAgICAgIGxldCAgb2JqZWN0U3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZShjb25uZWN0aW9uRGIsIHtrZXlQYXRoOiAnaWQnfSk7IC8vIGNyZWF0ZSBpdFxuICAgIC8vICAgICAgIG9iamVjdFN0b3JlLnRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKHNldHRpbmdzKSl7XG4gICAgLy8gICAgICAgbGV0ICBvYmplY3RTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKHNldHRpbmdzLCB7a2V5UGF0aDogJ2lkJ30pOyAvLyBjcmVhdGUgaXRcbiAgICAvLyAgICAgICBvYmplY3RTdG9yZS50cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn1cbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRGcm9tRGF0YWJhc2UoZGF0YWJhc2VOYW1lOnN0cmluZywgaWQ6bnVtYmVyKXtcbi8vICAgb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSkudGhlbigoKT0+e1xuLy8gICAgIGxldCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKGRhdGFiYXNlTmFtZSwgXCJyZWFkd3JpdGVcIikgYXMgSURCVHJhbnNhY3Rpb247XG4vLyAgICAgbGV0IG9iamVjdFN0b3JlID10cmFuc2FjdGlvbi5vYmplY3RTdG9yZShkYXRhYmFzZU5hbWUpIGFzIElEQk9iamVjdFN0b3JlO1xuLy8gICAgIGxldCBnZXRSZXF1ZXN0ID0gb2JqZWN0U3RvcmUuZ2V0KGlkKTtcbi8vICAgICBnZXRSZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKGV2ZW50OkV2ZW50KSB7XG4vLyAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIElEQlJlcXVlc3Q7XG4vLyAgICAgICBjb25jZXB0ID0gdGFyZ2V0LnJlc3VsdCBhcyBDb25jZXB0O1xuLy8gICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4vLyAgICAgICAvLyBjb25jZXB0ID0gIGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4vLyAgICAgICAvLyBBY2Nlc3MgdGhlIHJldHJpZXZlZCBkYXRhXG4vLyAgICAgfTsgIFxuLy8gICAgICByZXR1cm4gY29uY2VwdCBhcyBDb25jZXB0O1xuLy8gICB9KTtcbi8vICAgICAvLyAgIC8vIERhdGFiYXNlIG9wZW5lZCBzdWNjZXNzZnVsbHlcbi8vICAgICAvLyB9O1xuLy8gICB9XG5leHBvcnQgZnVuY3Rpb24gR2V0U3RhdHNGcm9tRGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGRhdGFiYXNlTmFtZSA9IFwic2V0dGluZ3NcIjtcbiAgICAgICAgb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB2YXIgZGIgPSBJbmRleERiLmRiO1xuICAgICAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oZGF0YWJhc2VOYW1lLCBcInJlYWR3cml0ZVwiKTtcbiAgICAgICAgICAgIGxldCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKGRhdGFiYXNlTmFtZSk7XG4gICAgICAgICAgICB2YXIgYWxsb2JqZWN0cyA9IG9iamVjdFN0b3JlLmdldEFsbCgpO1xuICAgICAgICAgICAgYWxsb2JqZWN0cy5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzRGF0YSA9IG5ldyBTZXR0aW5nRGF0YShmYWxzZSk7XG4gICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzQXJyYXkgPSBhbGxvYmplY3RzLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldHRpbmdzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3NEYXRhID0gc2V0dGluZ3NBcnJheVtpXTtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3NEYXRhID0gc2V0dGluZ3NEYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHNldHRpbmdzRGF0YSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBBaVVwZGF0ZUZsYWcob2JqZWN0KSB7XG4gICAgdmFyIGRhdGFiYXNlTmFtZSA9IFwic2V0dGluZ3NcIjtcbiAgICBvcGVuRGF0YWJhc2UoZGF0YWJhc2VOYW1lKS50aGVuKCgpID0+IHtcbiAgICAgICAgdmFyIGRiID0gSW5kZXhEYi5kYjtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oZGF0YWJhc2VOYW1lLCBcInJlYWR3cml0ZVwiKTtcbiAgICAgICAgbGV0IG9ialN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoZGF0YWJhc2VOYW1lKTtcbiAgICAgICAgb2JqU3RvcmUucHV0KG9iamVjdCk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RnJvbURhdGFiYXNlV2l0aFR5cGUoZGF0YWJhc2VOYW1lLCB0eXBlLCBpZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBvcGVuRGF0YWJhc2UoZGF0YWJhc2VOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihCYXNlVXJsLkJBU0VfVVJMICsgXCJfRnJlZVNjaGVtYVwiLCB2ZXJzaW9uKTtcbiAgICAgICAgICAgIHZhciBjb25jZXB0O1xuICAgICAgICAgICAgdmFyIENvbmNlcHRMaXN0ID0gW107XG4gICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGRiID0gdGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihkYXRhYmFzZU5hbWUsIFwicmVhZHdyaXRlXCIpO1xuICAgICAgICAgICAgICAgIGxldCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKGRhdGFiYXNlTmFtZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2V0Q3Vyc29yUmVxdWVzdCA9IG9iamVjdFN0b3JlLm9wZW5DdXJzb3IoKTtcbiAgICAgICAgICAgICAgICBnZXRDdXJzb3JSZXF1ZXN0Lm9uc3VjY2VzcyA9IGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBDdXJzb3IgbG9naWMgaGVyZVxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJzb3IgPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3Vyc29yLnZhbHVlW3R5cGVdID09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uY2VwdCA9IGN1cnNvci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25jZXB0TGlzdC5wdXNoKGNvbmNlcHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlc29sdmUoQ29uY2VwdExpc3QpO1xuICAgICAgICAgICAgICAgIC8vICAgLy8gRGF0YWJhc2Ugb3BlbmVkIHN1Y2Nlc3NmdWxseVxuICAgICAgICAgICAgICAgIC8vIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGV2ZW50KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICAvLyByZXR1cm4gQ29uY2VwdExpc3Q7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RnJvbURhdGFiYXNlV2l0aFR5cGVPbGQoZGF0YWJhc2VOYW1lKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIG9wZW5EYXRhYmFzZShkYXRhYmFzZU5hbWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBjb25jZXB0O1xuICAgICAgICAgICAgICAgIHZhciBDb25jZXB0TGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBkYiA9IEluZGV4RGIuZGI7XG4gICAgICAgICAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oZGF0YWJhc2VOYW1lLCBcInJlYWR3cml0ZVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShkYXRhYmFzZU5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciBhbGxvYmplY3RzID0gb2JqZWN0U3RvcmUuZ2V0QWxsKCk7XG4gICAgICAgICAgICAgICAgYWxsb2JqZWN0cy5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0dWRlbnRzID0gYWxsb2JqZWN0cy5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R1ZGVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmNlcHRMaXN0LnB1c2goc3R1ZGVudHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoQ29uY2VwdExpc3QpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHJldHVybiBDb25jZXB0TGlzdDtcbiAgICB9KTtcbn1cbi8vICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZyb21EYXRhYmFzZVdpdGhDaGFyYWN0ZXJPbGQoZGF0YWJhc2VOYW1lOnN0cmluZywgdHlwZTpzdHJpbmcsIGNoYXJhY3RlclZhbHVlOnN0cmluZyl7XG4vLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4vLyAgICAgb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSk7XG4vLyAgICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKFwiRnJlZVNjaGVtYVwiLHZlcnNpb24pO1xuLy8gICAgIHZhciBjb25jZXB0OiBDb25jZXB0fG51bGw7XG4vLyAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbihldmVudCkge1xuLy8gICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIElEQk9wZW5EQlJlcXVlc3Q7XG4vLyAgICAgICAgIHZhciBkYiA9IHRhcmdldC5yZXN1bHQgYXMgSURCRGF0YWJhc2U7XG4vLyAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihkYXRhYmFzZU5hbWUsIFwicmVhZHdyaXRlXCIpIGFzIElEQlRyYW5zYWN0aW9uO1xuLy8gICAgICAgbGV0IG9iamVjdFN0b3JlID10cmFuc2FjdGlvbi5vYmplY3RTdG9yZShkYXRhYmFzZU5hbWUpIGFzIElEQk9iamVjdFN0b3JlO1xuLy8gICAgICAgdmFyIGFsbG9iamVjdHMgPSBvYmplY3RTdG9yZS5nZXRBbGwoKTtcbi8vICAgICAgIGFsbG9iamVjdHMub25zdWNjZXNzID0gKCk9PiB7XG4vLyAgICAgICAgIGNvbnN0IHN0dWRlbnRzID0gYWxsb2JqZWN0cy5yZXN1bHQ7XG4vLyAgICAgICAgIGZvcih2YXIgaT0wOyBpPHN0dWRlbnRzLmxlbmd0aDsgaSsrKXtcbi8vICAgICAgICAgICBpZihzdHVkZW50c1tpXS5jaGFyYWN0ZXJfdmFsdWUgPT0gY2hhcmFjdGVyVmFsdWUpe1xuLy8gICAgICAgICAgICAgY29uY2VwdCA9IHN0dWRlbnRzW2ldO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcInJlc29sdmluZ1wiKTtcbi8vICAgICAgICAgcmVzb2x2ZShjb25jZXB0KTsgXG4vLyAgICAgfVxuLy8gICAgIC8vICAgLy8gRGF0YWJhc2Ugb3BlbmVkIHN1Y2Nlc3NmdWxseVxuLy8gICAgIC8vIH07XG4vLyAgICAgfVxuLy8gICAgIHJlcXVlc3Qub25lcnJvciA9ZnVuY3Rpb24oZXZlbnQpe1xuLy8gICAgICAgcmVqZWN0KGV2ZW50KTtcbi8vICAgICB9XG4vLyB9KTtcbi8vICAgIC8vIHJldHVybiBDb25jZXB0TGlzdDtcbi8vICAgfVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZyb21EYXRhYmFzZShkYXRhYmFzZU5hbWUsIGlkKSB7XG4gICAgb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSk7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKEJhc2VVcmwuQkFTRV9VUkwgKyBcIl9GcmVlU2NoZW1hXCIsIHZlcnNpb24pO1xuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHZhciBkYiA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKGRhdGFiYXNlTmFtZSwgXCJyZWFkd3JpdGVcIik7XG4gICAgICAgIGxldCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKGRhdGFiYXNlTmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRpbmcgZnJvbSB0aGUgZGF0YWJhc2VcIiwgaWQpO1xuICAgICAgICBsZXQgZ2V0UmVxdWVzdCA9IG9iamVjdFN0b3JlLmRlbGV0ZShOdW1iZXIoaWQpKTtcbiAgICAgICAgZ2V0UmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICAgICAgLy8gY29uY2VwdCA9ICBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgLy8gQWNjZXNzIHRoZSByZXRyaWV2ZWQgZGF0YVxuICAgICAgICB9O1xuICAgIH07XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGdldEZyb21EYXRhYmFzZVdpdGhUeXBlT2xkIH0gZnJvbSBcIi4uL0RhdGFiYXNlL2luZGV4ZWRkYlwiO1xuaW1wb3J0IHsgQ29uY2VwdHNEYXRhIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVCaW5hcnlUcmVlRnJvbURhdGEoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgY29uY2VwdExpc3QgPSB5aWVsZCBnZXRGcm9tRGF0YWJhc2VXaXRoVHlwZU9sZChcImNvbmNlcHRcIik7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbmNlcHRMaXN0KSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25jZXB0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjb25jZXB0ID0gY29uY2VwdExpc3RbaV07XG4gICAgICAgICAgICAgICAgQ29uY2VwdHNEYXRhLkFkZENvbmNlcHRUb01lbW9yeShjb25jZXB0KTtcbiAgICAgICAgICAgICAgICAvLyBsZXQgbm9kZSA9IG5ldyBOb2RlKGNvbmNlcHQuaWQsIGNvbmNlcHQsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgICAgIC8vIEJpbmFyeVRyZWUuYWRkTm9kZVRvVHJlZShub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgZW5kVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgdGltZSA9IGVuZFRpbWUgLSBzdGFydFRpbWU7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29ubmVjdGlvblwiO1xuaW1wb3J0IHsgU3luY0RhdGEgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvU3luY0RhdGFcIjtcbmltcG9ydCBNYWtlVGhlSW5zdGFuY2VDb25jZXB0IGZyb20gXCIuL01ha2VUaGVJbnN0YW5jZUNvbmNlcHRcIjtcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVDb25uZWN0aW9uQmV0d2VlblR3b0NvbmNlcHRzKGNvbmNlcHQxRGF0YSwgY29uY2VwdDJEYXRhLCBsaW5rZXIsIGJvdGggPSBmYWxzZSkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIHVzZXJJZCA9IGNvbmNlcHQxRGF0YS51c2VySWQ7XG4gICAgICAgIHZhciBvcmRlclVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlY3VyaXR5SWQgPSA5OTk7XG4gICAgICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIGFjY2Vzc0lkID0gNDtcbiAgICAgICAgdmFyIGFjY2Vzc1VzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlc3Npb25JbmZvcm1hdGlvbklkID0gOTk5O1xuICAgICAgICB2YXIgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkID0gOTk5O1xuICAgICAgICBpZiAoYm90aCkge1xuICAgICAgICAgICAgbGV0IHByZWZpeDEgPSAoKF9hID0gY29uY2VwdDFEYXRhLnR5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jaGFyYWN0ZXJWYWx1ZSkgKyBcIl9zXCI7XG4gICAgICAgICAgICBsZXQgbGlua2VyQWRkMSA9IGxpbmtlciArIFwiX2J5XCI7XG4gICAgICAgICAgICBsZXQgYmFja3dhcmRMaW5rZXIgPSBwcmVmaXgxICsgXCJfXCIgKyBsaW5rZXJBZGQxO1xuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb25Db25jZXB0UmV2ZXJzZSA9IHlpZWxkIE1ha2VUaGVJbnN0YW5jZUNvbmNlcHQoXCJjb25uZWN0aW9uXCIsIGJhY2t3YXJkTGlua2VyLCBmYWxzZSwgOTk5LCA5OTksIDk5OSk7XG4gICAgICAgICAgICB2YXIgbmV3Q29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uKDAsIGNvbmNlcHQyRGF0YS5pZCwgY29uY2VwdDFEYXRhLmlkLCBjb25jZXB0MkRhdGEudXNlcklkLCBjb25jZXB0MURhdGEudXNlcklkLCBjb25jZXB0MkRhdGEudXNlcklkLCBjb25uZWN0aW9uQ29uY2VwdFJldmVyc2UuaWQsIGNvbm5lY3Rpb25Db25jZXB0UmV2ZXJzZS51c2VySWQsIDEwMDAsIHVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpO1xuICAgICAgICAgICAgU3luY0RhdGEuQWRkQ29ubmVjdGlvbihuZXdDb25uZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcHJlZml4ID0gKChfYiA9IGNvbmNlcHQxRGF0YS50eXBlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2hhcmFjdGVyVmFsdWUpICsgXCJfc1wiO1xuICAgICAgICBsZXQgbGlua2VyQWRkID0gbGlua2VyICsgXCJfc1wiO1xuICAgICAgICBsZXQgZm9yd2FyZExpbmtlciA9IHByZWZpeCArIFwiX1wiICsgbGlua2VyQWRkO1xuICAgICAgICB2YXIgY29ubmVjdGlvbkNvbmNlcHQgPSB5aWVsZCBNYWtlVGhlSW5zdGFuY2VDb25jZXB0KFwiY29ubmVjdGlvblwiLCBmb3J3YXJkTGlua2VyLCBmYWxzZSwgOTk5LCA5OTksIDk5OSk7XG4gICAgICAgIHZhciBuZXdDb25uZWN0aW9uID0gbmV3IENvbm5lY3Rpb24oMCwgY29uY2VwdDFEYXRhLmlkLCBjb25jZXB0MkRhdGEuaWQsIGNvbmNlcHQxRGF0YS51c2VySWQsIGNvbmNlcHQyRGF0YS51c2VySWQsIGNvbmNlcHQxRGF0YS51c2VySWQsIGNvbm5lY3Rpb25Db25jZXB0LmlkLCBjb25uZWN0aW9uQ29uY2VwdC51c2VySWQsIDEwMDAsIHVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpO1xuICAgICAgICBTeW5jRGF0YS5BZGRDb25uZWN0aW9uKG5ld0Nvbm5lY3Rpb24pO1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDb25jZXB0IH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHRcIjtcbmltcG9ydCBjcmVhdGVUaGVDb25uZWN0aW9uIGZyb20gXCIuL0NyZWF0ZVRoZUNvbm5lY3Rpb25cIjtcbmltcG9ydCBNYWtlVGhlSW5zdGFuY2VDb25jZXB0IGZyb20gXCIuL01ha2VUaGVJbnN0YW5jZUNvbmNlcHRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVRoZUNvbXBvc2l0aW9uKGpzb24sIG9mVGhlQ29uY2VwdElkID0gbnVsbCwgb2ZUaGVDb25jZXB0VXNlcklkID0gbnVsbCwgbWFpbktleSA9IG51bGwsIHVzZXJJZCA9IG51bGwsIGFjY2Vzc0lkID0gbnVsbCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQgPSBudWxsKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGxvY2FsVXNlcklkID0gdXNlcklkICE9PSBudWxsICYmIHVzZXJJZCAhPT0gdm9pZCAwID8gdXNlcklkIDogMTAyNjc7XG4gICAgICAgIHZhciBsb2NhbEFjY2Vzc0lkID0gYWNjZXNzSWQgIT09IG51bGwgJiYgYWNjZXNzSWQgIT09IHZvaWQgMCA/IGFjY2Vzc0lkIDogMTAyNjc7XG4gICAgICAgIHZhciBsb2NhbFNlc3Npb25JZCA9IHNlc3Npb25JbmZvcm1hdGlvbklkICE9PSBudWxsICYmIHNlc3Npb25JbmZvcm1hdGlvbklkICE9PSB2b2lkIDAgPyBzZXNzaW9uSW5mb3JtYXRpb25JZCA6IDEwMjY3O1xuICAgICAgICB2YXIgTWFpbktleUxvY2FsID0gbWFpbktleSAhPT0gbnVsbCAmJiBtYWluS2V5ICE9PSB2b2lkIDAgPyBtYWluS2V5IDogMDtcbiAgICAgICAgdmFyIE1haW5Db25jZXB0ID0gbmV3IENvbmNlcHQoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgXCIwXCIsIDAsIDAsIDAsIDAsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4ganNvbikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBqc29uW2tleV0gIT0gJ3N0cmluZycgJiYgdHlwZW9mIGpzb25ba2V5XSAhPSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGlmIChvZlRoZUNvbmNlcHRJZCA9PSBudWxsICYmIG9mVGhlQ29uY2VwdFVzZXJJZCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2NhbE1haW5LZXkgPSBNYWluS2V5TG9jYWw7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb25jZXB0U3RyaW5nID0geWllbGQgTWFrZVRoZUluc3RhbmNlQ29uY2VwdChrZXksIFwiXCIsIHRydWUsIGxvY2FsVXNlcklkLCBsb2NhbEFjY2Vzc0lkLCBsb2NhbFNlc3Npb25JZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgTWFpbkNvbmNlcHQgPSBjb25jZXB0O1xuICAgICAgICAgICAgICAgICAgICBsb2NhbE1haW5LZXkgPSBjb25jZXB0LmlkO1xuICAgICAgICAgICAgICAgICAgICBNYWluS2V5TG9jYWwgPSBjb25jZXB0LmlkO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBDcmVhdGVUaGVDb21wb3NpdGlvbihqc29uW2tleV0sIGNvbmNlcHQuaWQsIGNvbmNlcHQudXNlcklkLCBsb2NhbE1haW5LZXksIHVzZXJJZCwgYWNjZXNzSWQsIHNlc3Npb25JbmZvcm1hdGlvbklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvZlRoZSA9IG9mVGhlQ29uY2VwdElkICE9PSBudWxsICYmIG9mVGhlQ29uY2VwdElkICE9PSB2b2lkIDAgPyBvZlRoZUNvbmNlcHRJZCA6IDk5OTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9mVGhlVXNlciA9IG9mVGhlQ29uY2VwdFVzZXJJZCAhPT0gbnVsbCAmJiBvZlRoZUNvbmNlcHRVc2VySWQgIT09IHZvaWQgMCA/IG9mVGhlQ29uY2VwdFVzZXJJZCA6IDEwMjY3O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYWxNYWluS2V5ID0gTWFpbktleUxvY2FsO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkIE1ha2VUaGVJbnN0YW5jZUNvbmNlcHQoa2V5LCBcIlwiLCB0cnVlLCBsb2NhbFVzZXJJZCwgbG9jYWxBY2Nlc3NJZCwgbG9jYWxTZXNzaW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGNyZWF0ZVRoZUNvbm5lY3Rpb24ob2ZUaGUsIG9mVGhlVXNlciwgY29uY2VwdC5pZCwgY29uY2VwdC51c2VySWQsIGxvY2FsTWFpbktleSwgbG9jYWxTZXNzaW9uSWQsIGNvbmNlcHQudXNlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgQ3JlYXRlVGhlQ29tcG9zaXRpb24oanNvbltrZXldLCBjb25jZXB0LmlkLCBjb25jZXB0LnVzZXJJZCwgbG9jYWxNYWluS2V5LCB1c2VySWQsIGFjY2Vzc0lkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG9mVGhlID0gb2ZUaGVDb25jZXB0SWQgIT09IG51bGwgJiYgb2ZUaGVDb25jZXB0SWQgIT09IHZvaWQgMCA/IG9mVGhlQ29uY2VwdElkIDogOTk5O1xuICAgICAgICAgICAgICAgIHZhciBvZlRoZVVzZXIgPSBvZlRoZUNvbmNlcHRVc2VySWQgIT09IG51bGwgJiYgb2ZUaGVDb25jZXB0VXNlcklkICE9PSB2b2lkIDAgPyBvZlRoZUNvbmNlcHRVc2VySWQgOiAxMDI2NztcbiAgICAgICAgICAgICAgICB2YXIgbG9jYWxNYWluS2V5ID0gTWFpbktleUxvY2FsO1xuICAgICAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgTWFrZVRoZUluc3RhbmNlQ29uY2VwdChrZXksIGpzb25ba2V5XSwgZmFsc2UsIGxvY2FsVXNlcklkLCBsb2NhbEFjY2Vzc0lkLCBsb2NhbFNlc3Npb25JZCk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgIHlpZWxkIGNyZWF0ZVRoZUNvbm5lY3Rpb24ob2ZUaGUsIG9mVGhlVXNlciwgY29uY2VwdC5pZCwgY29uY2VwdC51c2VySWQsIGxvY2FsTWFpbktleSwgbG9jYWxTZXNzaW9uSWQsIGNvbmNlcHQudXNlcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWFpbkNvbmNlcHQ7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENvbmNlcHQgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdFwiO1xuaW1wb3J0IHsgUmVzZXJ2ZWRJZHMgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvUmVzZXJ2ZWRJZHNcIjtcbmltcG9ydCB7IFN5bmNEYXRhIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL1N5bmNEYXRhXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVUaGVDb25jZXB0KHJlZmVyZW50LCB1c2VySWQsIGNhdGVnb3J5SWQsIGNhdGVnb3J5VXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIHJlZmVyZW50SWQsIHJlZmVyZW50VXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBpZCA9IHlpZWxkIFJlc2VydmVkSWRzLmdldElkKCk7XG4gICAgICAgIHZhciBpc05ldyA9IHRydWU7XG4gICAgICAgIHZhciBjb25jZXB0ID0gbmV3IENvbmNlcHQoaWQsIHVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCBjYXRlZ29yeUlkLCBjYXRlZ29yeVVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHJlZmVyZW50LCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCwgaXNOZXcpO1xuICAgICAgICBjb25jZXB0LmlzVGVtcCA9IHRydWU7XG4gICAgICAgIFN5bmNEYXRhLkFkZENvbmNlcHQoY29uY2VwdCk7XG4gICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9Db25uZWN0aW9uXCI7XG5pbXBvcnQgeyBTeW5jRGF0YSB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9TeW5jRGF0YVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGhlQ29ubmVjdGlvbihvZlRoZUNvbmNlcHRJZCwgb2ZUaGVDb25jZXB0VXNlcklkLCB0b1RoZUNvbmNlcHRJZCwgdG9UaGVDb25jZXB0VXNlcklkLCB0eXBlSWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpIHtcbiAgICB2YXIgb3JkZXJJZCA9IDE7XG4gICAgdmFyIG9yZGVyVXNlcklkID0gb2ZUaGVDb25jZXB0VXNlcklkO1xuICAgIHZhciB0eXBlVXNlcklkID0gb2ZUaGVDb25jZXB0VXNlcklkO1xuICAgIHZhciB1c2VySWQgPSBvZlRoZUNvbmNlcHRVc2VySWQ7XG4gICAgdmFyIHNlY3VyaXR5SWQgPSAwO1xuICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IG9mVGhlQ29uY2VwdFVzZXJJZDtcbiAgICB2YXIgYWNjZXNzSWQgPSA0O1xuICAgIHZhciBhY2Nlc3NVc2VySWQgPSBvZlRoZUNvbmNlcHRVc2VySWQ7XG4gICAgaWYgKG9mVGhlQ29uY2VwdElkICE9IHRvVGhlQ29uY2VwdElkKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uID0gbmV3IENvbm5lY3Rpb24oMCwgb2ZUaGVDb25jZXB0SWQsIHRvVGhlQ29uY2VwdElkLCBvZlRoZUNvbmNlcHRVc2VySWQsIHRvVGhlQ29uY2VwdFVzZXJJZCwgdXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIG9yZGVySWQsIG9yZGVyVXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgIGNvbm5lY3Rpb24uaXNUZW1wID0gdHJ1ZTtcbiAgICAgICAgY29ubmVjdGlvbi5pZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XG4gICAgICAgIFN5bmNEYXRhLkFkZENvbm5lY3Rpb24oY29ubmVjdGlvbik7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgRGVsZXRlVGhlQ29uY2VwdCBmcm9tIFwiLi4vQXBpL0RlbGV0ZVRoZUNvbmNlcHRcIjtcbmltcG9ydCB7IEJpbmFyeUNoYXJhY3RlclRyZWUgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQmluYXJ5Q2hhcmFjdGVyVHJlZVwiO1xuaW1wb3J0IHsgQmluYXJ5VHJlZSB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9CaW5hcnlUcmVlXCI7XG5pbXBvcnQgeyBCaW5hcnlUeXBlVHJlZSB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9CaW5hcnlUeXBlVHJlZVwiO1xuaW1wb3J0IHsgcmVtb3ZlRnJvbURhdGFiYXNlIH0gZnJvbSBcIi4uL0RhdGFiYXNlL2luZGV4ZWRkYlwiO1xuaW1wb3J0IEdldFRoZUNvbmNlcHQgZnJvbSBcIi4vR2V0VGhlQ29uY2VwdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIERlbGV0ZUNvbmNlcHRCeUlkKGlkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCBHZXRUaGVDb25jZXB0KGlkKTtcbiAgICAgICAgeWllbGQgQmluYXJ5VHJlZS5yZW1vdmVOb2RlRnJvbVRyZWUoaWQpO1xuICAgICAgICB2YXIgdHlwZUlkID0gY29uY2VwdC50eXBlSWQ7XG4gICAgICAgIHZhciBjaGFyYWN0ZXIgPSBjb25jZXB0LmNoYXJhY3RlclZhbHVlO1xuICAgICAgICB5aWVsZCBCaW5hcnlUeXBlVHJlZS5yZW1vdmVUeXBlQ29uY2VwdCh0eXBlSWQsIGlkKTtcbiAgICAgICAgeWllbGQgQmluYXJ5Q2hhcmFjdGVyVHJlZS5yZW1vdmVOb2RlQnlDaGFyYWN0ZXIoY2hhcmFjdGVyLCBpZCk7XG4gICAgICAgIHJlbW92ZUZyb21EYXRhYmFzZShcImNvbmNlcHRcIiwgaWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0aW5nIHRoZSBkYXRhXCIsIGNvbmNlcHQpO1xuICAgICAgICBEZWxldGVUaGVDb25jZXB0KGlkKTtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQ29ubmVjdGlvbkJpbmFyeVRyZWUgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29ubmVjdGlvbkJpbmFyeVRyZWUvQ29ubmVjdGlvbkJpbmFyeVRyZWVcIjtcbmltcG9ydCB7IENvbm5lY3Rpb25UeXBlVHJlZSB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9Db25uZWN0aW9uQmluYXJ5VHJlZS9Db25uZWN0aW9uVHlwZVRyZWVcIjtcbmltcG9ydCB7IHJlbW92ZUZyb21EYXRhYmFzZSB9IGZyb20gXCIuLi9EYXRhYmFzZS9pbmRleGVkZGJcIjtcbmltcG9ydCB7IEdldENvbm5lY3Rpb25CeUlkIH0gZnJvbSBcIi4vR2V0Q29ubmVjdGlvbnNcIjtcbmV4cG9ydCBmdW5jdGlvbiBEZWxldGVDb25uZWN0aW9uQnlJZChpZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uID0geWllbGQgR2V0Q29ubmVjdGlvbkJ5SWQoaWQpO1xuICAgICAgICByZW1vdmVGcm9tRGF0YWJhc2UoXCJjb25uZWN0aW9uXCIsIGlkKTtcbiAgICAgICAgQ29ubmVjdGlvbkJpbmFyeVRyZWUucmVtb3ZlTm9kZUZyb21UcmVlKGlkKTtcbiAgICAgICAgQ29ubmVjdGlvblR5cGVUcmVlLnJlbW92ZVR5cGVDb25jZXB0KGNvbm5lY3Rpb24udHlwZUlkLCBpZCk7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEdldENvbmNlcHQgfSBmcm9tIFwiLi4vQXBpL0dldENvbmNlcHRcIjtcbmltcG9ydCB7IEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbiB9IGZyb20gXCIuLi9BcGkvR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uXCI7XG5pbXBvcnQgeyBDb25jZXB0c0RhdGEgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdERhdGFcIjtcbmltcG9ydCB7IENvbm5lY3Rpb25EYXRhIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb25EYXRhXCI7XG5leHBvcnQgZnVuY3Rpb24gR2V0Q29tcG9zaXRpb24oaWQpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uTGlzdCA9IFtdO1xuICAgICAgICB2YXIgcmV0dXJuT3V0cHV0ID0ge307XG4gICAgICAgIHZhciBjb25uZWN0aW9uTGlzdFN0cmluZyA9IHlpZWxkIEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbihpZCk7XG4gICAgICAgIGNvbm5lY3Rpb25MaXN0ID0gY29ubmVjdGlvbkxpc3RTdHJpbmc7XG4gICAgICAgIC8vY29ubmVjdGlvbkxpc3QgPSBDb25uZWN0aW9uRGF0YS5HZXRDb25uZWN0aW9uc09mQ29tcG9zaXRpb24oaWQpO1xuICAgICAgICB2YXIgY29tcG9zaXRpb25MaXN0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29ubmVjdGlvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghY29tcG9zaXRpb25MaXN0LmluY2x1ZGVzKGNvbm5lY3Rpb25MaXN0W2ldLm9mVGhlQ29uY2VwdElkKSkge1xuICAgICAgICAgICAgICAgIGNvbXBvc2l0aW9uTGlzdC5wdXNoKGNvbm5lY3Rpb25MaXN0W2ldLm9mVGhlQ29uY2VwdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY29uY2VwdCA9IHlpZWxkIENvbmNlcHRzRGF0YS5HZXRDb25jZXB0KGlkKTtcbiAgICAgICAgaWYgKGNvbmNlcHQuaWQgPT0gMCAmJiBpZCAhPSBudWxsICYmIGlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBHZXRDb25jZXB0KGlkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvdXRwdXQgPSB5aWVsZCByZWN1cnNpdmVGZXRjaChpZCwgY29ubmVjdGlvbkxpc3QsIGNvbXBvc2l0aW9uTGlzdCk7XG4gICAgICAgIHZhciBtYWluU3RyaW5nID0gKF9iID0gKF9hID0gY29uY2VwdCA9PT0gbnVsbCB8fCBjb25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25jZXB0LnR5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jaGFyYWN0ZXJWYWx1ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCJcIjtcbiAgICAgICAgcmV0dXJuT3V0cHV0W21haW5TdHJpbmddID0gb3V0cHV0O1xuICAgICAgICByZXR1cm4gcmV0dXJuT3V0cHV0O1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEdldENvbXBvc2l0aW9uRnJvbU1lbW9yeShpZCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25MaXN0ID0gW107XG4gICAgICAgIHZhciByZXR1cm5PdXRwdXQgPSB7fTtcbiAgICAgICAgY29ubmVjdGlvbkxpc3QgPSB5aWVsZCBDb25uZWN0aW9uRGF0YS5HZXRDb25uZWN0aW9uc09mQ29tcG9zaXRpb25Mb2NhbChpZCk7XG4gICAgICAgIC8vY29ubmVjdGlvbkxpc3QgPSBDb25uZWN0aW9uRGF0YS5HZXRDb25uZWN0aW9uc09mQ29tcG9zaXRpb24oaWQpO1xuICAgICAgICB2YXIgY29tcG9zaXRpb25MaXN0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29ubmVjdGlvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghY29tcG9zaXRpb25MaXN0LmluY2x1ZGVzKGNvbm5lY3Rpb25MaXN0W2ldLm9mVGhlQ29uY2VwdElkKSkge1xuICAgICAgICAgICAgICAgIGNvbXBvc2l0aW9uTGlzdC5wdXNoKGNvbm5lY3Rpb25MaXN0W2ldLm9mVGhlQ29uY2VwdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY29uY2VwdCA9IHlpZWxkIENvbmNlcHRzRGF0YS5HZXRDb25jZXB0KGlkKTtcbiAgICAgICAgaWYgKGNvbmNlcHQuaWQgPT0gMCAmJiBpZCAhPSBudWxsICYmIGlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBHZXRDb25jZXB0KGlkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvdXRwdXQgPSB5aWVsZCByZWN1cnNpdmVGZXRjaChpZCwgY29ubmVjdGlvbkxpc3QsIGNvbXBvc2l0aW9uTGlzdCk7XG4gICAgICAgIHZhciBtYWluU3RyaW5nID0gKF9iID0gKF9hID0gY29uY2VwdCA9PT0gbnVsbCB8fCBjb25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25jZXB0LnR5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jaGFyYWN0ZXJWYWx1ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCJcIjtcbiAgICAgICAgcmV0dXJuT3V0cHV0W21haW5TdHJpbmddID0gb3V0cHV0O1xuICAgICAgICByZXR1cm4gcmV0dXJuT3V0cHV0O1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEdldENvbXBvc2l0aW9uV2l0aElkRnJvbU1lbW9yeShpZCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25MaXN0ID0gW107XG4gICAgICAgIHZhciByZXR1cm5PdXRwdXQgPSB7fTtcbiAgICAgICAgY29ubmVjdGlvbkxpc3QgPSB5aWVsZCBDb25uZWN0aW9uRGF0YS5HZXRDb25uZWN0aW9uc09mQ29tcG9zaXRpb25Mb2NhbChpZCk7XG4gICAgICAgIHZhciBjb21wb3NpdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFjb21wb3NpdGlvbkxpc3QuaW5jbHVkZXMoY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQpKSB7XG4gICAgICAgICAgICAgICAgY29tcG9zaXRpb25MaXN0LnB1c2goY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgQ29uY2VwdHNEYXRhLkdldENvbmNlcHQoaWQpO1xuICAgICAgICBpZiAoY29uY2VwdC5pZCA9PSAwICYmIGlkICE9IG51bGwgJiYgaWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkIEdldENvbmNlcHQoaWQpO1xuICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG91dHB1dCA9IHlpZWxkIHJlY3Vyc2l2ZUZldGNoKGlkLCBjb25uZWN0aW9uTGlzdCwgY29tcG9zaXRpb25MaXN0KTtcbiAgICAgICAgdmFyIG1haW5TdHJpbmcgPSAoX2IgPSAoX2EgPSBjb25jZXB0ID09PSBudWxsIHx8IGNvbmNlcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbmNlcHQudHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoYXJhY3RlclZhbHVlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcIlwiO1xuICAgICAgICByZXR1cm5PdXRwdXRbbWFpblN0cmluZ10gPSBvdXRwdXQ7XG4gICAgICAgIHZhciBGaW5hbFJldHVybiA9IHt9O1xuICAgICAgICBGaW5hbFJldHVyblsnZGF0YSddID0gcmV0dXJuT3V0cHV0O1xuICAgICAgICBGaW5hbFJldHVyblsnaWQnXSA9IGlkO1xuICAgICAgICByZXR1cm4gRmluYWxSZXR1cm47XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gR2V0Q29tcG9zaXRpb25XaXRoSWQoaWQpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uTGlzdCA9IFtdO1xuICAgICAgICB2YXIgcmV0dXJuT3V0cHV0ID0ge307XG4gICAgICAgIHZhciBjb25uZWN0aW9uTGlzdFN0cmluZyA9IHlpZWxkIEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbihpZCk7XG4gICAgICAgIGNvbm5lY3Rpb25MaXN0ID0gY29ubmVjdGlvbkxpc3RTdHJpbmc7XG4gICAgICAgIHZhciBjb21wb3NpdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFjb21wb3NpdGlvbkxpc3QuaW5jbHVkZXMoY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQpKSB7XG4gICAgICAgICAgICAgICAgY29tcG9zaXRpb25MaXN0LnB1c2goY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgQ29uY2VwdHNEYXRhLkdldENvbmNlcHQoaWQpO1xuICAgICAgICBpZiAoY29uY2VwdC5pZCA9PSAwICYmIGlkICE9IG51bGwgJiYgaWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkIEdldENvbmNlcHQoaWQpO1xuICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG91dHB1dCA9IHlpZWxkIHJlY3Vyc2l2ZUZldGNoKGlkLCBjb25uZWN0aW9uTGlzdCwgY29tcG9zaXRpb25MaXN0KTtcbiAgICAgICAgdmFyIG1haW5TdHJpbmcgPSAoX2IgPSAoX2EgPSBjb25jZXB0ID09PSBudWxsIHx8IGNvbmNlcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbmNlcHQudHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoYXJhY3RlclZhbHVlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcIlwiO1xuICAgICAgICByZXR1cm5PdXRwdXRbbWFpblN0cmluZ10gPSBvdXRwdXQ7XG4gICAgICAgIHZhciBGaW5hbFJldHVybiA9IHt9O1xuICAgICAgICBGaW5hbFJldHVyblsnZGF0YSddID0gcmV0dXJuT3V0cHV0O1xuICAgICAgICBGaW5hbFJldHVyblsnaWQnXSA9IGlkO1xuICAgICAgICByZXR1cm4gRmluYWxSZXR1cm47XG4gICAgfSk7XG59XG5mdW5jdGlvbiByZWN1cnNpdmVGZXRjaChpZCwgY29ubmVjdGlvbkxpc3QsIGNvbXBvc2l0aW9uTGlzdCkge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgb3V0cHV0ID0ge307XG4gICAgICAgIHZhciBhcnJvdXRwdXQgPSBbXTtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCBDb25jZXB0c0RhdGEuR2V0Q29uY2VwdChpZCk7XG4gICAgICAgIGlmICgoY29uY2VwdCA9PSBudWxsIHx8IGNvbmNlcHQuaWQgPT0gMCkgJiYgaWQgIT0gbnVsbCAmJiBpZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgR2V0Q29uY2VwdChpZCk7XG4gICAgICAgICAgICBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uY2VwdCkge1xuICAgICAgICAgICAgaWYgKGNvbmNlcHQudHlwZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvQ29uY2VwdFR5cGVJZCA9IGNvbmNlcHQudHlwZUlkO1xuICAgICAgICAgICAgICAgIHZhciB0b0NvbmNlcHRUeXBlID0geWllbGQgQ29uY2VwdHNEYXRhLkdldENvbmNlcHQodG9Db25jZXB0VHlwZUlkKTtcbiAgICAgICAgICAgICAgICBjb25jZXB0LnR5cGUgPSB0b0NvbmNlcHRUeXBlO1xuICAgICAgICAgICAgICAgIGlmICh0b0NvbmNlcHRUeXBlID09IG51bGwgJiYgdG9Db25jZXB0VHlwZUlkICE9IG51bGwgJiYgdG9Db25jZXB0VHlwZUlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkIEdldENvbmNlcHQodG9Db25jZXB0VHlwZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgdG9Db25jZXB0VHlwZSA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIGNvbmNlcHQudHlwZSA9IHRvQ29uY2VwdFR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBtYWluU3RyaW5nID0gKF9iID0gKF9hID0gY29uY2VwdCA9PT0gbnVsbCB8fCBjb25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25jZXB0LnR5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jaGFyYWN0ZXJWYWx1ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCJcIjtcbiAgICAgICAgaWYgKCFjb21wb3NpdGlvbkxpc3QuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uY2VwdCA9PT0gbnVsbCB8fCBjb25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25jZXB0LmNoYXJhY3RlclZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0aW9uTGlzdFtpXS5vZlRoZUNvbmNlcHRJZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG9Db25jZXB0SWQgPSBjb25uZWN0aW9uTGlzdFtpXS50b1RoZUNvbmNlcHRJZDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvQ29uY2VwdCA9IHlpZWxkIENvbmNlcHRzRGF0YS5HZXRDb25jZXB0KHRvQ29uY2VwdElkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh0b0NvbmNlcHQgPT0gbnVsbCB8fCB0b0NvbmNlcHQuaWQgPT0gMCkgJiYgdG9Db25jZXB0SWQgIT0gbnVsbCAmJiB0b0NvbmNlcHRJZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgR2V0Q29uY2VwdCh0b0NvbmNlcHRJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0NvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0NvbmNlcHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodG9Db25jZXB0ID09PSBudWxsIHx8IHRvQ29uY2VwdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG9Db25jZXB0LnR5cGUpID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9Db25jZXB0VHlwZUlkID0gdG9Db25jZXB0LnR5cGVJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9Db25jZXB0VHlwZSA9IHlpZWxkIENvbmNlcHRzRGF0YS5HZXRDb25jZXB0KHRvQ29uY2VwdFR5cGVJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Db25jZXB0LnR5cGUgPSB0b0NvbmNlcHRUeXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b0NvbmNlcHRUeXBlID09IG51bGwgJiYgdG9Db25jZXB0VHlwZUlkICE9IG51bGwgJiYgdG9Db25jZXB0VHlwZUlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkIEdldENvbmNlcHQodG9Db25jZXB0VHlwZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Db25jZXB0VHlwZSA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvQ29uY2VwdC50eXBlID0gdG9Db25jZXB0VHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ2V4ID0gXCJ0aGVfXCI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2NhbG1haW5TdHJpbmcgPSAoX2QgPSAoX2MgPSB0b0NvbmNlcHQgPT09IG51bGwgfHwgdG9Db25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b0NvbmNlcHQudHlwZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNoYXJhY3RlclZhbHVlKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYWxLZXkgPSBsb2NhbG1haW5TdHJpbmcucmVwbGFjZShyZWdleCwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihOdW1iZXIobG9jYWxLZXkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2FsS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVjdXJzaXZlRmV0Y2godG9Db25jZXB0SWQsIGNvbm5lY3Rpb25MaXN0LCBjb21wb3NpdGlvbkxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFtsb2NhbEtleV0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCByZWN1cnNpdmVGZXRjaCh0b0NvbmNlcHRJZCwgY29ubmVjdGlvbkxpc3QsIGNvbXBvc2l0aW9uTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvdXRwdXRbbG9jYWxLZXldID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gYXJyb3V0cHV0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbkJ1bGsgfSBmcm9tIFwiLi4vQXBpL0dldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbkJ1bGtcIjtcbmltcG9ydCB7IEdldENvbXBvc2l0aW9uRnJvbU1lbW9yeSwgR2V0Q29tcG9zaXRpb25XaXRoSWRGcm9tTWVtb3J5IH0gZnJvbSBcIi4vR2V0Q29tcG9zaXRpb25cIjtcbmV4cG9ydCBmdW5jdGlvbiBHZXRDb21wb3NpdGlvbkJ1bGsoaWRzID0gW10pIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBHZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb25CdWxrKGlkcyk7XG4gICAgICAgIHZhciBjb21wb3NpdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjb21wID0geWllbGQgR2V0Q29tcG9zaXRpb25Gcm9tTWVtb3J5KGlkc1tpXSk7XG4gICAgICAgICAgICBjb21wb3NpdGlvbnMucHVzaChjb21wKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9zaXRpb25zO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEdldENvbXBvc2l0aW9uQnVsa1dpdGhEYXRhSWQoaWRzID0gW10pIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBHZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb25CdWxrKGlkcyk7XG4gICAgICAgIHZhciBjb21wb3NpdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjb21wID0geWllbGQgR2V0Q29tcG9zaXRpb25XaXRoSWRGcm9tTWVtb3J5KGlkc1tpXSk7XG4gICAgICAgICAgICBjb21wb3NpdGlvbnMucHVzaChjb21wKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9zaXRpb25zO1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBHZXRBbGxDb25jZXB0c0J5VHlwZSB9IGZyb20gXCIuLi9BcGkvR2V0QWxsQ29uY2VwdHNCeVR5cGVcIjtcbmltcG9ydCB7IEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbkJ1bGsgfSBmcm9tIFwiLi4vQXBpL0dldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbkJ1bGtcIjtcbmltcG9ydCB7IENvbmNlcHRzRGF0YSB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YVwiO1xuaW1wb3J0IHsgR2V0Q29tcG9zaXRpb25Gcm9tTWVtb3J5LCBHZXRDb21wb3NpdGlvbldpdGhJZEZyb21NZW1vcnkgfSBmcm9tIFwiLi9HZXRDb21wb3NpdGlvblwiO1xuaW1wb3J0IEdldENvbmNlcHRCeUNoYXJhY3RlciBmcm9tIFwiLi9HZXRDb25jZXB0QnlDaGFyYWN0ZXJcIjtcbmV4cG9ydCBmdW5jdGlvbiBHZXRDb21wb3NpdGlvbkxpc3QoY29tcG9zaXRpb25OYW1lLCB1c2VySWQsIGlucGFnZSA9IDEwLCBwYWdlID0gMSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyKGNvbXBvc2l0aW9uTmFtZSk7XG4gICAgICAgIHZhciBDb21wb3NpdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgaWYgKGNvbmNlcHQpIHtcbiAgICAgICAgICAgIHlpZWxkIEdldEFsbENvbmNlcHRzQnlUeXBlKGNvbXBvc2l0aW9uTmFtZSwgdXNlcklkKTtcbiAgICAgICAgICAgIHZhciBjb25jZXB0TGlzdCA9IHlpZWxkIENvbmNlcHRzRGF0YS5HZXRDb25jZXB0c0J5VHlwZUlkQW5kVXNlcihjb25jZXB0LmlkLCB1c2VySWQpO1xuICAgICAgICAgICAgdmFyIHN0YXJ0UGFnZSA9IGlucGFnZSAqIChwYWdlIC0gMSk7XG4gICAgICAgICAgICB2YXIgcHJlZmV0Y2hDb21wb3NpdGlvbiA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0UGFnZTsgaSA8IHN0YXJ0UGFnZSArIGlucGFnZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmNlcHRMaXN0W2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZWZldGNoQ29tcG9zaXRpb24ucHVzaChjb25jZXB0TGlzdFtpXS5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeWllbGQgR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uQnVsayhwcmVmZXRjaENvbXBvc2l0aW9uKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydFBhZ2U7IGkgPCBzdGFydFBhZ2UgKyBpbnBhZ2U7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb25jZXB0TGlzdFtpXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29tcG9zaXRpb25Kc29uID0geWllbGQgR2V0Q29tcG9zaXRpb25Gcm9tTWVtb3J5KGNvbmNlcHRMaXN0W2ldLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9zaXRpb25MaXN0LnB1c2goY29tcG9zaXRpb25Kc29uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIENvbXBvc2l0aW9uTGlzdDtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBHZXRDb21wb3NpdGlvbkxpc3RXaXRoSWQoY29tcG9zaXRpb25OYW1lLCB1c2VySWQsIGlucGFnZSA9IDEwLCBwYWdlID0gMSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyKGNvbXBvc2l0aW9uTmFtZSk7XG4gICAgICAgIHZhciBDb21wb3NpdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgaWYgKGNvbmNlcHQpIHtcbiAgICAgICAgICAgIHlpZWxkIEdldEFsbENvbmNlcHRzQnlUeXBlKGNvbXBvc2l0aW9uTmFtZSwgdXNlcklkKTtcbiAgICAgICAgICAgIHZhciBjb25jZXB0TGlzdCA9IHlpZWxkIENvbmNlcHRzRGF0YS5HZXRDb25jZXB0c0J5VHlwZUlkQW5kVXNlcihjb25jZXB0LmlkLCB1c2VySWQpO1xuICAgICAgICAgICAgdmFyIHN0YXJ0UGFnZSA9IGlucGFnZSAqIChwYWdlIC0gMSk7XG4gICAgICAgICAgICB2YXIgcHJlZmV0Y2hDb21wb3NpdGlvbiA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0UGFnZTsgaSA8IHN0YXJ0UGFnZSArIGlucGFnZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmNlcHRMaXN0W2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZWZldGNoQ29tcG9zaXRpb24ucHVzaChjb25jZXB0TGlzdFtpXS5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeWllbGQgR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uQnVsayhwcmVmZXRjaENvbXBvc2l0aW9uKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydFBhZ2U7IGkgPCBzdGFydFBhZ2UgKyBpbnBhZ2U7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb25jZXB0TGlzdFtpXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29tcG9zaXRpb25Kc29uID0geWllbGQgR2V0Q29tcG9zaXRpb25XaXRoSWRGcm9tTWVtb3J5KGNvbmNlcHRMaXN0W2ldLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9zaXRpb25MaXN0LnB1c2goY29tcG9zaXRpb25Kc29uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIENvbXBvc2l0aW9uTGlzdDtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyVmFsdWUgfSBmcm9tIFwiLi4vQXBpL0dldENvbmNlcHRCeUNoYXJhY3RlclZhbHVlXCI7XG5pbXBvcnQgeyBDb25jZXB0c0RhdGEgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdERhdGFcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdldENvbmNlcHRCeUNoYXJhY3RlcihjaGFyYWN0ZXJWYWx1ZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgQ29uY2VwdHNEYXRhLkdldENvbmNlcHRCeUNoYXJhY3RlcihjaGFyYWN0ZXJWYWx1ZSk7XG4gICAgICAgIHZhciBsaXRlcmFsQ2hhcmFjdGVyID0gYCR7Y2hhcmFjdGVyVmFsdWV9YDtcbiAgICAgICAgaWYgKChjb25jZXB0ID09IG51bGwgfHwgKGNvbmNlcHQgPT09IG51bGwgfHwgY29uY2VwdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29uY2VwdC5pZCkgPT0gMCkgJiYgbGl0ZXJhbENoYXJhY3Rlcikge1xuICAgICAgICAgICAgeWllbGQgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyVmFsdWUoY2hhcmFjdGVyVmFsdWUpO1xuICAgICAgICAgICAgY29uY2VwdCA9IHlpZWxkIENvbmNlcHRzRGF0YS5HZXRDb25jZXB0QnlDaGFyYWN0ZXIoY2hhcmFjdGVyVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBHZXRDb25uZWN0aW9uIH0gZnJvbSBcIi4uL0FwaS9HZXRDb25uZWN0aW9uXCI7XG5pbXBvcnQgeyBDb25uZWN0aW9uRGF0YSB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9Db25uZWN0aW9uRGF0YVwiO1xuZXhwb3J0IGZ1bmN0aW9uIEdldENvbm5lY3Rpb25CeUlkKGlkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSB5aWVsZCBDb25uZWN0aW9uRGF0YS5HZXRDb25uZWN0aW9uKGlkKTtcbiAgICAgICAgaWYgKChjb25uZWN0aW9uID09IG51bGwgfHwgY29ubmVjdGlvbi5pZCA9PSAwKSAmJiBpZCAhPSBudWxsICYmIGlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb25TdHJpbmcgPSB5aWVsZCBHZXRDb25uZWN0aW9uKGlkKTtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24gPSBjb25uZWN0aW9uU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25uZWN0aW9uO1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDb25uZWN0aW9uRGF0YSB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9Db25uZWN0aW9uRGF0YVwiO1xuaW1wb3J0IHsgTG9jYWxDb25uZWN0aW9uRGF0YSB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbENvbm5lY3Rpb25EYXRhXCI7XG5pbXBvcnQgeyBnZXRBbGxGcm9tTG9jYWxEYiB9IGZyb20gXCIuLi9EYXRhYmFzZS9pbmRleGRibG9jYWxcIjtcbmltcG9ydCB7IGdldEZyb21EYXRhYmFzZVdpdGhUeXBlT2xkIH0gZnJvbSBcIi4uL0RhdGFiYXNlL2luZGV4ZWRkYlwiO1xuZXhwb3J0IGZ1bmN0aW9uIEdldERhdGFGcm9tSW5kZXhEYigpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyB2YXIgY29uY2VwdExpc3QgPSBhd2FpdCBnZXRGcm9tRGF0YWJhc2VXaXRoVHlwZU9sZChcImNvbmNlcHRcIik7XG4gICAgICAgIEdldENvbm5lY3Rpb25zRnJvbUluZGV4RGIoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29uY2VwdExpc3QpO1xuICAgICAgICAvLyBpZihBcnJheS5pc0FycmF5KGNvbmNlcHRMaXN0KSl7XG4gICAgICAgIC8vICAgICBmb3IodmFyIGk9MCA7aSA8IGNvbmNlcHRMaXN0Lmxlbmd0aCA7aSsrKXtcbiAgICAgICAgLy8gICAgICAgICBDb25jZXB0c0RhdGEuQWRkQ29uY2VwdChjb25jZXB0TGlzdFtpXSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBHZXREYXRhRnJvbUluZGV4RGJMb2NhbCgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyB2YXIgY29uY2VwdExpc3QgPSBhd2FpdCBnZXRBbGxGcm9tTG9jYWxEYihcImxvY2FsY29uY2VwdFwiKTtcbiAgICAgICAgR2V0Q29ubmVjdGlvbnNGcm9tSW5kZXhEYkxvY2FsKCk7XG4gICAgICAgIC8vIGlmKEFycmF5LmlzQXJyYXkoY29uY2VwdExpc3QpKXtcbiAgICAgICAgLy8gICAgIGZvcih2YXIgaT0wIDtpIDwgY29uY2VwdExpc3QubGVuZ3RoIDtpKyspe1xuICAgICAgICAvLyAgICAgICAgIExvY2FsQ29uY2VwdHNEYXRhLkFkZENvbmNlcHQoY29uY2VwdExpc3RbaV0pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBHZXRDb25uZWN0aW9uc0Zyb21JbmRleERiKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uTGlzdCA9IHlpZWxkIGdldEZyb21EYXRhYmFzZVdpdGhUeXBlT2xkKFwiY29ubmVjdGlvblwiKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29ubmVjdGlvbkxpc3QpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbm5lY3Rpb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgQ29ubmVjdGlvbkRhdGEuQWRkQ29ubmVjdGlvblRvTWVtb3J5KGNvbm5lY3Rpb25MaXN0W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gR2V0Q29ubmVjdGlvbnNGcm9tSW5kZXhEYkxvY2FsKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uTGlzdCA9IHlpZWxkIGdldEFsbEZyb21Mb2NhbERiKFwibG9jYWxjb25uZWN0aW9uXCIpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb25uZWN0aW9uTGlzdCkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29ubmVjdGlvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBMb2NhbENvbm5lY3Rpb25EYXRhLkFkZENvbm5lY3Rpb24oY29ubmVjdGlvbkxpc3RbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGUgfSBmcm9tIFwiLi4vQXBpL0dldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGVcIjtcbmltcG9ydCB7IEdldENvbm5lY3Rpb25PZlRoZUNvbmNlcHQgfSBmcm9tIFwiLi4vQXBpL0dldENvbm5lY3Rpb25PZlRoZUNvbmNlcHRcIjtcbmltcG9ydCB7IEdldENvbXBvc2l0aW9uV2l0aElkIH0gZnJvbSBcIi4vR2V0Q29tcG9zaXRpb25cIjtcbmltcG9ydCBHZXRUaGVDb25jZXB0IGZyb20gXCIuL0dldFRoZUNvbmNlcHRcIjtcbmltcG9ydCB7IEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbkJ1bGsgfSBmcm9tIFwiLi4vQXBpL0dldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbkJ1bGtcIjtcbmV4cG9ydCBmdW5jdGlvbiBHZXRMaW5rKGlkLCBsaW5rZXIsIGlucGFnZSA9IDEwLCBwYWdlID0gMSkge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgR2V0VGhlQ29uY2VwdChpZCk7XG4gICAgICAgIHZhciBsaW5rU3RyaW5nID0gKChfYSA9IGNvbmNlcHQudHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoYXJhY3RlclZhbHVlKSArIFwiX3NcIiArIFwiX1wiICsgbGlua2VyO1xuICAgICAgICB2YXIgcmVsYXRlZENvbmNlcHRTdHJpbmcgPSB5aWVsZCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlKGxpbmtTdHJpbmcsIDE2KTtcbiAgICAgICAgdmFyIHJlbGF0ZWRDb25jZXB0ID0gcmVsYXRlZENvbmNlcHRTdHJpbmc7XG4gICAgICAgIGlmIChyZWxhdGVkQ29uY2VwdC5pZCA+IDApIHtcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uc1N0cmluZyA9IHlpZWxkIEdldENvbm5lY3Rpb25PZlRoZUNvbmNlcHQocmVsYXRlZENvbmNlcHQuaWQsIGNvbmNlcHQuaWQsIGNvbmNlcHQudXNlcklkLCBpbnBhZ2UsIHBhZ2UpO1xuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb25zID0gY29ubmVjdGlvbnNTdHJpbmc7XG4gICAgICAgICAgICB2YXIgcHJlZmV0Y2ggPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29ubmVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwcmVmZXRjaC5wdXNoKGNvbm5lY3Rpb25zW2ldLnRvVGhlQ29uY2VwdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHlpZWxkIEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbkJ1bGsocHJlZmV0Y2gpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB0b0NvbmNlcHRJZCA9IGNvbm5lY3Rpb25zW2ldLnRvVGhlQ29uY2VwdElkO1xuICAgICAgICAgICAgICAgIGxldCB0b0NvbmNlcHQgPSB5aWVsZCBHZXRUaGVDb25jZXB0KHRvQ29uY2VwdElkKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3Q29tcG9zaXRpb24gPSB5aWVsZCBHZXRDb21wb3NpdGlvbldpdGhJZCh0b0NvbmNlcHQuaWQpO1xuICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKG5ld0NvbXBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBHZXRBbGxMaW5rZXJDb25uZWN0aW9uc0Zyb21UaGVDb25jZXB0IH0gZnJvbSBcIi4uL0FwaS9HZXRBbGxMaW5rZXJDb25uZWN0aW9uc0Zyb21UaGVDb25jZXB0XCI7XG5pbXBvcnQgR2V0VGhlQ29uY2VwdCBmcm9tIFwiLi9HZXRUaGVDb25jZXB0XCI7XG5leHBvcnQgZnVuY3Rpb24gR2V0TGlua2VyQ29ubmVjdGlvbkZyb21Db25jZXB0cyhpZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9ucyA9IHlpZWxkIEdldEFsbExpbmtlckNvbm5lY3Rpb25zRnJvbVRoZUNvbmNlcHQoaWQpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbm5lY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbG9jYWxDb25uZWN0aW9uID0gY29ubmVjdGlvbnNbaV07XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbklkZW50aWZpZXIgPSBsb2NhbENvbm5lY3Rpb24udHlwZUlkO1xuICAgICAgICAgICAgbGV0IGNvbmNlcHQgPSB5aWVsZCBHZXRUaGVDb25jZXB0KGNvbm5lY3Rpb25JZGVudGlmaWVyKTtcbiAgICAgICAgICAgIGxvY2FsQ29ubmVjdGlvbi50eXBlID0gY29uY2VwdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29ubmVjdGlvbnM7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEdldENvbmNlcHQgfSBmcm9tIFwiLi4vQXBpL0dldENvbmNlcHRcIjtcbmltcG9ydCB7IENvbmNlcHQgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdFwiO1xuaW1wb3J0IHsgQ29uY2VwdHNEYXRhIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXRUaGVDb25jZXB0KGlkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSBuZXcgQ29uY2VwdCgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCBcIjBcIiwgMCwgMCwgMCwgMCwgMCwgMCwgZmFsc2UpO1xuICAgICAgICBjb25jZXB0ID0geWllbGQgQ29uY2VwdHNEYXRhLkdldENvbmNlcHQoaWQpO1xuICAgICAgICBpZiAoKGNvbmNlcHQgPT0gbnVsbCB8fCBjb25jZXB0LmlkID09IDApICYmIGlkICE9IG51bGwgJiYgaWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkIEdldENvbmNlcHQoaWQpO1xuICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmNlcHQpIHtcbiAgICAgICAgICAgIGlmIChjb25jZXB0LnR5cGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBjb25jZXB0VHlwZSA9IHlpZWxkIENvbmNlcHRzRGF0YS5HZXRDb25jZXB0KGNvbmNlcHQudHlwZUlkKTtcbiAgICAgICAgICAgICAgICBpZiAoY29uY2VwdFR5cGUgPT0gbnVsbCAmJiBjb25jZXB0LnR5cGVJZCAhPSBudWxsICYmIGNvbmNlcHQudHlwZUlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHlwZUNvbmNlcHRTdHJpbmcgPSB5aWVsZCBHZXRDb25jZXB0KGNvbmNlcHQudHlwZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGVDb25jZXB0ID0gdHlwZUNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIGNvbmNlcHQudHlwZSA9IHR5cGVDb25jZXB0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IEdldFRoZUNvbmNlcHQgZnJvbSBcIi4vR2V0VGhlQ29uY2VwdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2V0VGhlUmVmZXJlbnQoaWQsIHVzZXJJZCwgcmVmZXJlbnRJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBteXJlZiA9IHJlZmVyZW50SWQgIT09IG51bGwgJiYgcmVmZXJlbnRJZCAhPT0gdm9pZCAwID8gcmVmZXJlbnRJZCA6IDA7XG4gICAgICAgIHZhciByZWZlcmVudCA9IHlpZWxkIEdldFRoZUNvbmNlcHQocmVmZXJlbnRJZCk7XG4gICAgICAgIC8vdmFyIHJlc3VsdDogUmVmZXJlbnRJbmZvID0gbmV3IFJlZmVyZW50SW5mbyhyZWZlcmVudC5pZCwgcmVmZXJlbnQudXNlcklkLCByZWZlcmVudC5yZWZlcmVudElkLCByZWZlcmVudC5yZWZlcmVudFVzZXJJZCk7XG4gICAgICAgIHJldHVybiByZWZlcmVudDtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgR2V0QWlEYXRhIH0gZnJvbSBcIi4uL0FwaS9HZXRBaURhdGFcIjtcbmltcG9ydCB7IEJpbmFyeVRyZWUgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQmluYXJ5VHJlZVwiO1xuaW1wb3J0IHsgU2V0dGluZ0RhdGEgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvU2V0dGluZ0RhdGFcIjtcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL1NldHRpbmdzXCI7XG5pbXBvcnQgeyBBaVVwZGF0ZUZsYWcsIEdldFN0YXRzRnJvbURhdGFiYXNlIH0gZnJvbSBcIi4uL0RhdGFiYXNlL2luZGV4ZWRkYlwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5pdGlhbGl6ZVN5c3RlbSgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgc3RhdHNEYXRhID0geWllbGQgR2V0U3RhdHNGcm9tRGF0YWJhc2UoKTtcbiAgICAgICAgdmFyIHNldHRpbmdzID0gc3RhdHNEYXRhO1xuICAgICAgICBpZiAoIXNldHRpbmdzLmlzT25saW5lU3luYykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcmVmZXRjaGluZ1wiKTtcbiAgICAgICAgICAgIC8vIGF3YWl0IEdldEFsbFByZWZldGNoQ29ubmVjdGlvbnMoMTAyNjcsMjAwMCk7XG4gICAgICAgICAgICB5aWVsZCBHZXRBaURhdGEoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgYmluYXJ5IGRhdGFcIiwgQmluYXJ5VHJlZS5yb290KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gUHVyZ2F0b3J5RGF0YWJhc2VVcGRhdGVkKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIFNldHRpbmdzLmlzT25saW5lU3luYyA9IHRydWU7XG4gICAgICAgIHZhciBzZXR0aW5nRGF0YSA9IG5ldyBTZXR0aW5nRGF0YShTZXR0aW5ncy5pc09ubGluZVN5bmMpO1xuICAgICAgICBBaVVwZGF0ZUZsYWcoc2V0dGluZ0RhdGEpO1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBMb2NhbENvbmNlcHRzRGF0YSB9IGZyb20gXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbENvbmNlcHREYXRhXCI7XG5pbXBvcnQgeyBnZXRBbGxGcm9tTG9jYWxEYiB9IGZyb20gXCIuLi8uLi9EYXRhYmFzZS9pbmRleGRibG9jYWxcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZUxvY2FsQmluYXJ5VHJlZUZyb21EYXRhKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25jZXB0TGlzdCA9IHlpZWxkIGdldEFsbEZyb21Mb2NhbERiKFwibG9jYWxjb25jZXB0XCIpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb25jZXB0TGlzdCkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29uY2VwdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY29uY2VwdCA9IGNvbmNlcHRMaXN0W2ldO1xuICAgICAgICAgICAgICAgIExvY2FsQ29uY2VwdHNEYXRhLkFkZENvbmNlcHRUb01lbW9yeShjb25jZXB0KTtcbiAgICAgICAgICAgICAgICAvLyBsZXQgbm9kZSA9IG5ldyBOb2RlKGNvbmNlcHQuaWQsIGNvbmNlcHQsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgICAgIC8vIExvY2FsQmluYXJ5VHJlZS5hZGROb2RlVG9UcmVlKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENvbmNlcHQgfSBmcm9tIFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdFwiO1xuaW1wb3J0IENyZWF0ZVRoZUNvbm5lY3Rpb25Mb2NhbCBmcm9tIFwiLi9DcmVhdGVUaGVDb25uZWN0aW9uTG9jYWxcIjtcbmltcG9ydCB7IE1ha2VUaGVJbnN0YW5jZUNvbmNlcHRMb2NhbCB9IGZyb20gXCIuL01ha2VUaGVJbnN0YW5jZUNvbmNlcHRMb2NhbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVRoZUNvbXBvc2l0aW9uTG9jYWwoanNvbiwgb2ZUaGVDb25jZXB0SWQgPSBudWxsLCBvZlRoZUNvbmNlcHRVc2VySWQgPSBudWxsLCBtYWluS2V5ID0gbnVsbCwgdXNlcklkID0gbnVsbCwgYWNjZXNzSWQgPSBudWxsLCBzZXNzaW9uSW5mb3JtYXRpb25JZCA9IG51bGwpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgbG9jYWxVc2VySWQgPSB1c2VySWQgIT09IG51bGwgJiYgdXNlcklkICE9PSB2b2lkIDAgPyB1c2VySWQgOiAxMDI2NztcbiAgICAgICAgdmFyIGxvY2FsQWNjZXNzSWQgPSBhY2Nlc3NJZCAhPT0gbnVsbCAmJiBhY2Nlc3NJZCAhPT0gdm9pZCAwID8gYWNjZXNzSWQgOiAxMDI2NztcbiAgICAgICAgdmFyIGxvY2FsU2Vzc2lvbklkID0gc2Vzc2lvbkluZm9ybWF0aW9uSWQgIT09IG51bGwgJiYgc2Vzc2lvbkluZm9ybWF0aW9uSWQgIT09IHZvaWQgMCA/IHNlc3Npb25JbmZvcm1hdGlvbklkIDogMTAyNjc7XG4gICAgICAgIHZhciBNYWluS2V5TG9jYWwgPSBtYWluS2V5ICE9PSBudWxsICYmIG1haW5LZXkgIT09IHZvaWQgMCA/IG1haW5LZXkgOiAwO1xuICAgICAgICB2YXIgTWFpbkNvbmNlcHQgPSBuZXcgQ29uY2VwdCgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCBcIjBcIiwgMCwgMCwgMCwgMCwgMCwgMCwgZmFsc2UpO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBqc29uKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGpzb25ba2V5XSAhPSAnc3RyaW5nJyAmJiB0eXBlb2YganNvbltrZXldICE9ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9mVGhlQ29uY2VwdElkID09IG51bGwgJiYgb2ZUaGVDb25jZXB0VXNlcklkID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2FsTWFpbktleSA9IE1haW5LZXlMb2NhbDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBNYWtlVGhlSW5zdGFuY2VDb25jZXB0TG9jYWwoa2V5LCBcIlwiLCB0cnVlLCBsb2NhbFVzZXJJZCwgbG9jYWxBY2Nlc3NJZCwgbG9jYWxTZXNzaW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIE1haW5Db25jZXB0ID0gY29uY2VwdDtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxNYWluS2V5ID0gY29uY2VwdC5pZDtcbiAgICAgICAgICAgICAgICAgICAgTWFpbktleUxvY2FsID0gY29uY2VwdC5pZDtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgQ3JlYXRlVGhlQ29tcG9zaXRpb25Mb2NhbChqc29uW2tleV0sIGNvbmNlcHQuaWQsIGNvbmNlcHQudXNlcklkLCBsb2NhbE1haW5LZXksIHVzZXJJZCwgYWNjZXNzSWQsIHNlc3Npb25JbmZvcm1hdGlvbklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvZlRoZSA9IG9mVGhlQ29uY2VwdElkICE9PSBudWxsICYmIG9mVGhlQ29uY2VwdElkICE9PSB2b2lkIDAgPyBvZlRoZUNvbmNlcHRJZCA6IDk5OTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9mVGhlVXNlciA9IG9mVGhlQ29uY2VwdFVzZXJJZCAhPT0gbnVsbCAmJiBvZlRoZUNvbmNlcHRVc2VySWQgIT09IHZvaWQgMCA/IG9mVGhlQ29uY2VwdFVzZXJJZCA6IDEwMjY3O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYWxNYWluS2V5ID0gTWFpbktleUxvY2FsO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkIE1ha2VUaGVJbnN0YW5jZUNvbmNlcHRMb2NhbChrZXksIFwiXCIsIHRydWUsIGxvY2FsVXNlcklkLCBsb2NhbEFjY2Vzc0lkLCBsb2NhbFNlc3Npb25JZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgQ3JlYXRlVGhlQ29ubmVjdGlvbkxvY2FsKG9mVGhlLCBvZlRoZVVzZXIsIGNvbmNlcHQuaWQsIGNvbmNlcHQudXNlcklkLCBsb2NhbE1haW5LZXksIGxvY2FsU2Vzc2lvbklkLCBjb25jZXB0LnVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIENyZWF0ZVRoZUNvbXBvc2l0aW9uTG9jYWwoanNvbltrZXldLCBjb25jZXB0LmlkLCBjb25jZXB0LnVzZXJJZCwgbG9jYWxNYWluS2V5LCB1c2VySWQsIGFjY2Vzc0lkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG9mVGhlID0gb2ZUaGVDb25jZXB0SWQgIT09IG51bGwgJiYgb2ZUaGVDb25jZXB0SWQgIT09IHZvaWQgMCA/IG9mVGhlQ29uY2VwdElkIDogOTk5O1xuICAgICAgICAgICAgICAgIHZhciBvZlRoZVVzZXIgPSBvZlRoZUNvbmNlcHRVc2VySWQgIT09IG51bGwgJiYgb2ZUaGVDb25jZXB0VXNlcklkICE9PSB2b2lkIDAgPyBvZlRoZUNvbmNlcHRVc2VySWQgOiAxMDI2NztcbiAgICAgICAgICAgICAgICB2YXIgbG9jYWxNYWluS2V5ID0gTWFpbktleUxvY2FsO1xuICAgICAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgTWFrZVRoZUluc3RhbmNlQ29uY2VwdExvY2FsKGtleSwganNvbltrZXldLCBmYWxzZSwgbG9jYWxVc2VySWQsIGxvY2FsQWNjZXNzSWQsIGxvY2FsU2Vzc2lvbklkKTtcbiAgICAgICAgICAgICAgICB2YXIgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgeWllbGQgQ3JlYXRlVGhlQ29ubmVjdGlvbkxvY2FsKG9mVGhlLCBvZlRoZVVzZXIsIGNvbmNlcHQuaWQsIGNvbmNlcHQudXNlcklkLCBsb2NhbE1haW5LZXksIGxvY2FsU2Vzc2lvbklkLCBjb25jZXB0LnVzZXJJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1haW5Db25jZXB0O1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDb25jZXB0IH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHRcIjtcbmltcG9ydCB7IExvY2FsQ29uY2VwdHNEYXRhIH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0xvY2FsL0xvY2FsQ29uY2VwdERhdGFcIjtcbmltcG9ydCB7IHN0b3JlVG9EYXRhYmFzZSB9IGZyb20gXCIuLi8uLi9EYXRhYmFzZS9pbmRleGRibG9jYWxcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVRoZUNvbmNlcHRMb2NhbChyZWZlcmVudCwgdXNlcklkLCBjYXRlZ29yeUlkLCBjYXRlZ29yeVVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCByZWZlcmVudElkLCByZWZlcmVudFVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xuICAgICAgICB2YXIgaXNOZXcgPSB0cnVlO1xuICAgICAgICB2YXIgY29uY2VwdCA9IG5ldyBDb25jZXB0KGlkLCB1c2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgY2F0ZWdvcnlJZCwgY2F0ZWdvcnlVc2VySWQsIHJlZmVyZW50SWQsIHJlZmVyZW50VXNlcklkLCByZWZlcmVudCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQsIGlzTmV3KTtcbiAgICAgICAgY29uY2VwdC5pc1RlbXAgPSB0cnVlO1xuICAgICAgICBMb2NhbENvbmNlcHRzRGF0YS5BZGRDb25jZXB0KGNvbmNlcHQpO1xuICAgICAgICBzdG9yZVRvRGF0YWJhc2UoXCJsb2NhbGNvbmNlcHRcIiwgY29uY2VwdCk7XG4gICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9Db25uZWN0aW9uXCI7XG5pbXBvcnQgeyBMb2NhbENvbm5lY3Rpb25EYXRhIH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0xvY2FsL0xvY2FsQ29ubmVjdGlvbkRhdGFcIjtcbmltcG9ydCB7IHN0b3JlVG9EYXRhYmFzZSB9IGZyb20gXCIuLi8uLi9EYXRhYmFzZS9pbmRleGRibG9jYWxcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVRoZUNvbm5lY3Rpb25Mb2NhbChvZlRoZUNvbmNlcHRJZCwgb2ZUaGVDb25jZXB0VXNlcklkLCB0b1RoZUNvbmNlcHRJZCwgdG9UaGVDb25jZXB0VXNlcklkLCB0eXBlSWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpIHtcbiAgICB2YXIgb3JkZXJJZCA9IDE7XG4gICAgdmFyIG9yZGVyVXNlcklkID0gb2ZUaGVDb25jZXB0VXNlcklkO1xuICAgIHZhciB0eXBlVXNlcklkID0gb2ZUaGVDb25jZXB0VXNlcklkO1xuICAgIHZhciB1c2VySWQgPSBvZlRoZUNvbmNlcHRVc2VySWQ7XG4gICAgdmFyIHNlY3VyaXR5SWQgPSAwO1xuICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IG9mVGhlQ29uY2VwdFVzZXJJZDtcbiAgICB2YXIgYWNjZXNzSWQgPSA0O1xuICAgIHZhciBhY2Nlc3NVc2VySWQgPSBvZlRoZUNvbmNlcHRVc2VySWQ7XG4gICAgaWYgKG9mVGhlQ29uY2VwdElkICE9IHRvVGhlQ29uY2VwdElkKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uID0gbmV3IENvbm5lY3Rpb24oMCwgb2ZUaGVDb25jZXB0SWQsIHRvVGhlQ29uY2VwdElkLCBvZlRoZUNvbmNlcHRVc2VySWQsIHRvVGhlQ29uY2VwdFVzZXJJZCwgdXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIG9yZGVySWQsIG9yZGVyVXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgIGNvbm5lY3Rpb24uaXNUZW1wID0gdHJ1ZTtcbiAgICAgICAgY29ubmVjdGlvbi5pZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XG4gICAgICAgIExvY2FsQ29ubmVjdGlvbkRhdGEuQWRkQ29ubmVjdGlvbihjb25uZWN0aW9uKTtcbiAgICAgICAgc3RvcmVUb0RhdGFiYXNlKFwibG9jYWxjb25uZWN0aW9uXCIsIGNvbm5lY3Rpb24pO1xuICAgIH1cbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgTG9jYWxDb25jZXB0c0RhdGEgfSBmcm9tIFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvTG9jYWwvTG9jYWxDb25jZXB0RGF0YVwiO1xuaW1wb3J0IHsgR2V0Q29tcG9zaXRpb25Mb2NhbCwgR2V0Q29tcG9zaXRpb25Mb2NhbFdpdGhJZCB9IGZyb20gXCIuL0dldENvbXBvc2l0aW9uTG9jYWxcIjtcbmltcG9ydCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJMb2NhbCBmcm9tIFwiLi9HZXRDb25jZXB0QnlDaGFyYWN0ZXJMb2NhbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIEdldENvbXBvc2l0aW9uTGlzdExvY2FsKGNvbXBvc2l0aW9uTmFtZSwgdXNlcklkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJMb2NhbChjb21wb3NpdGlvbk5hbWUpO1xuICAgICAgICB2YXIgQ29tcG9zaXRpb25MaXN0ID0gW107XG4gICAgICAgIGlmIChjb25jZXB0KSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdExpc3QgPSB5aWVsZCBMb2NhbENvbmNlcHRzRGF0YS5HZXRDb25jZXB0c0J5VHlwZUlkQW5kVXNlcihjb25jZXB0LmlkLCB1c2VySWQpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25jZXB0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjb21wb3NpdGlvbkpzb24gPSB5aWVsZCBHZXRDb21wb3NpdGlvbkxvY2FsKGNvbmNlcHRMaXN0W2ldLmlkKTtcbiAgICAgICAgICAgICAgICBDb21wb3NpdGlvbkxpc3QucHVzaChjb21wb3NpdGlvbkpzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDb21wb3NpdGlvbkxpc3Q7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gR2V0Q29tcG9zaXRpb25MaXN0TG9jYWxXaXRoSWQoY29tcG9zaXRpb25OYW1lLCB1c2VySWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY29uY2VwdCA9IHlpZWxkIEdldENvbmNlcHRCeUNoYXJhY3RlckxvY2FsKGNvbXBvc2l0aW9uTmFtZSk7XG4gICAgICAgIHZhciBDb21wb3NpdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgaWYgKGNvbmNlcHQpIHtcbiAgICAgICAgICAgIHZhciBjb25jZXB0TGlzdCA9IHlpZWxkIExvY2FsQ29uY2VwdHNEYXRhLkdldENvbmNlcHRzQnlUeXBlSWRBbmRVc2VyKGNvbmNlcHQuaWQsIHVzZXJJZCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbmNlcHRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbXBvc2l0aW9uSnNvbiA9IHlpZWxkIEdldENvbXBvc2l0aW9uTG9jYWxXaXRoSWQoY29uY2VwdExpc3RbaV0uaWQpO1xuICAgICAgICAgICAgICAgIENvbXBvc2l0aW9uTGlzdC5wdXNoKGNvbXBvc2l0aW9uSnNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIENvbXBvc2l0aW9uTGlzdDtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgTG9jYWxDb25jZXB0c0RhdGEgfSBmcm9tIFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvTG9jYWwvTG9jYWxDb25jZXB0RGF0YVwiO1xuaW1wb3J0IHsgTG9jYWxDb25uZWN0aW9uRGF0YSB9IGZyb20gXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbENvbm5lY3Rpb25EYXRhXCI7XG5leHBvcnQgZnVuY3Rpb24gR2V0Q29tcG9zaXRpb25Mb2NhbChpZCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25MaXN0ID0gW107XG4gICAgICAgIHZhciByZXR1cm5PdXRwdXQgPSB7fTtcbiAgICAgICAgY29ubmVjdGlvbkxpc3QgPSB5aWVsZCBMb2NhbENvbm5lY3Rpb25EYXRhLkdldENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbkxvY2FsKGlkKTtcbiAgICAgICAgLy9jb25uZWN0aW9uTGlzdCA9IENvbm5lY3Rpb25EYXRhLkdldENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbihpZCk7XG4gICAgICAgIHZhciBjb21wb3NpdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFjb21wb3NpdGlvbkxpc3QuaW5jbHVkZXMoY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQpKSB7XG4gICAgICAgICAgICAgICAgY29tcG9zaXRpb25MaXN0LnB1c2goY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgTG9jYWxDb25jZXB0c0RhdGEuR2V0Q29uY2VwdChpZCk7XG4gICAgICAgIHZhciBvdXRwdXQgPSB5aWVsZCByZWN1cnNpdmVGZXRjaExvY2FsKGlkLCBjb25uZWN0aW9uTGlzdCwgY29tcG9zaXRpb25MaXN0KTtcbiAgICAgICAgdmFyIG1haW5TdHJpbmcgPSAoX2IgPSAoX2EgPSBjb25jZXB0ID09PSBudWxsIHx8IGNvbmNlcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbmNlcHQudHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoYXJhY3RlclZhbHVlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcInRvcFwiO1xuICAgICAgICByZXR1cm5PdXRwdXRbbWFpblN0cmluZ10gPSBvdXRwdXQ7XG4gICAgICAgIHJldHVybiByZXR1cm5PdXRwdXQ7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gR2V0Q29tcG9zaXRpb25Mb2NhbFdpdGhJZChpZCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25MaXN0ID0gW107XG4gICAgICAgIHZhciByZXR1cm5PdXRwdXQgPSB7fTtcbiAgICAgICAgY29ubmVjdGlvbkxpc3QgPSB5aWVsZCBMb2NhbENvbm5lY3Rpb25EYXRhLkdldENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbkxvY2FsKGlkKTtcbiAgICAgICAgdmFyIGNvbXBvc2l0aW9uTGlzdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbm5lY3Rpb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIWNvbXBvc2l0aW9uTGlzdC5pbmNsdWRlcyhjb25uZWN0aW9uTGlzdFtpXS5vZlRoZUNvbmNlcHRJZCkpIHtcbiAgICAgICAgICAgICAgICBjb21wb3NpdGlvbkxpc3QucHVzaChjb25uZWN0aW9uTGlzdFtpXS5vZlRoZUNvbmNlcHRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCBMb2NhbENvbmNlcHRzRGF0YS5HZXRDb25jZXB0KGlkKTtcbiAgICAgICAgaWYgKGNvbmNlcHQuaWQgIT0gMCkge1xuICAgICAgICAgICAgdmFyIG91dHB1dCA9IHlpZWxkIHJlY3Vyc2l2ZUZldGNoTG9jYWwoaWQsIGNvbm5lY3Rpb25MaXN0LCBjb21wb3NpdGlvbkxpc3QpO1xuICAgICAgICAgICAgdmFyIG1haW5TdHJpbmcgPSAoX2IgPSAoX2EgPSBjb25jZXB0ID09PSBudWxsIHx8IGNvbmNlcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbmNlcHQudHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoYXJhY3RlclZhbHVlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcInRvcFwiO1xuICAgICAgICAgICAgcmV0dXJuT3V0cHV0W21haW5TdHJpbmddID0gb3V0cHV0O1xuICAgICAgICAgICAgdmFyIEZpbmFsUmV0dXJuID0ge307XG4gICAgICAgIH1cbiAgICAgICAgRmluYWxSZXR1cm5bJ2RhdGEnXSA9IHJldHVybk91dHB1dDtcbiAgICAgICAgRmluYWxSZXR1cm5bJ2lkJ10gPSBpZDtcbiAgICAgICAgcmV0dXJuIEZpbmFsUmV0dXJuO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcmVjdXJzaXZlRmV0Y2hMb2NhbChpZCwgY29ubmVjdGlvbkxpc3QsIGNvbXBvc2l0aW9uTGlzdCkge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgb3V0cHV0ID0ge307XG4gICAgICAgIHZhciBhcnJvdXRwdXQgPSBbXTtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCBMb2NhbENvbmNlcHRzRGF0YS5HZXRDb25jZXB0KGlkKTtcbiAgICAgICAgaWYgKGNvbmNlcHQuaWQgIT0gMCkge1xuICAgICAgICAgICAgaWYgKGNvbmNlcHQudHlwZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvQ29uY2VwdFR5cGVJZCA9IGNvbmNlcHQudHlwZUlkO1xuICAgICAgICAgICAgICAgIHZhciB0b0NvbmNlcHRUeXBlID0geWllbGQgTG9jYWxDb25jZXB0c0RhdGEuR2V0Q29uY2VwdCh0b0NvbmNlcHRUeXBlSWQpO1xuICAgICAgICAgICAgICAgIGNvbmNlcHQudHlwZSA9IHRvQ29uY2VwdFR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1haW5TdHJpbmcgPSAoX2IgPSAoX2EgPSBjb25jZXB0ID09PSBudWxsIHx8IGNvbmNlcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbmNlcHQudHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoYXJhY3RlclZhbHVlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcInRvcFwiO1xuICAgICAgICBpZiAoIWNvbXBvc2l0aW9uTGlzdC5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25jZXB0ID09PSBudWxsIHx8IGNvbmNlcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbmNlcHQuY2hhcmFjdGVyVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbm5lY3Rpb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb25MaXN0W2ldLm9mVGhlQ29uY2VwdElkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b0NvbmNlcHRJZCA9IGNvbm5lY3Rpb25MaXN0W2ldLnRvVGhlQ29uY2VwdElkO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG9Db25jZXB0ID0geWllbGQgTG9jYWxDb25jZXB0c0RhdGEuR2V0Q29uY2VwdCh0b0NvbmNlcHRJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0NvbmNlcHQuaWQgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh0b0NvbmNlcHQgPT09IG51bGwgfHwgdG9Db25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b0NvbmNlcHQudHlwZSkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b0NvbmNlcHRUeXBlSWQgPSB0b0NvbmNlcHQudHlwZUlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b0NvbmNlcHRUeXBlID0geWllbGQgTG9jYWxDb25jZXB0c0RhdGEuR2V0Q29uY2VwdCh0b0NvbmNlcHRUeXBlSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvQ29uY2VwdC50eXBlID0gdG9Db25jZXB0VHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVnZXggPSBcInRoZV9cIjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2FsbWFpblN0cmluZyA9IChfZCA9IChfYyA9IHRvQ29uY2VwdCA9PT0gbnVsbCB8fCB0b0NvbmNlcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRvQ29uY2VwdC50eXBlKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY2hhcmFjdGVyVmFsdWUpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IFwidG9wXCI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2NhbEtleSA9IGxvY2FsbWFpblN0cmluZy5yZXBsYWNlKHJlZ2V4LCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKE51bWJlcihsb2NhbEtleSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYWxLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCByZWN1cnNpdmVGZXRjaExvY2FsKHRvQ29uY2VwdElkLCBjb25uZWN0aW9uTGlzdCwgY29tcG9zaXRpb25MaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRbbG9jYWxLZXldID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVjdXJzaXZlRmV0Y2hMb2NhbCh0b0NvbmNlcHRJZCwgY29ubmVjdGlvbkxpc3QsIGNvbXBvc2l0aW9uTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvdXRwdXRbbG9jYWxLZXldID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gYXJyb3V0cHV0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IExvY2FsQ29uY2VwdHNEYXRhIH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0xvY2FsL0xvY2FsQ29uY2VwdERhdGFcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdldENvbmNlcHRCeUNoYXJhY3RlckxvY2FsKGNoYXJhY3RlclZhbHVlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCBMb2NhbENvbmNlcHRzRGF0YS5HZXRDb25jZXB0QnlDaGFyYWN0ZXIoY2hhcmFjdGVyVmFsdWUpO1xuICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgTG9jYWxDb25jZXB0c0RhdGEgfSBmcm9tIFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvTG9jYWwvTG9jYWxDb25jZXB0RGF0YVwiO1xuaW1wb3J0IENyZWF0ZVRoZUNvbmNlcHRMb2NhbCBmcm9tIFwiLi9DcmVhdGVUaGVDb25jZXB0TG9jYWxcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1ha2VUaGVDb25jZXB0TG9jYWwocmVmZXJlbnQsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgY2F0ZWdvcnlVc2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBMb2NhbENvbmNlcHRzRGF0YS5HZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlTG9jYWwocmVmZXJlbnQsIHR5cGVJZCk7XG4gICAgICAgIHZhciBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgaWYgKGNvbmNlcHQuaWQgPT0gMCkge1xuICAgICAgICAgICAgY29uY2VwdFN0cmluZyA9IHlpZWxkIENyZWF0ZVRoZUNvbmNlcHRMb2NhbChyZWZlcmVudCwgdXNlcklkLCBjYXRlZ29yeUlkLCBjYXRlZ29yeVVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCByZWZlcmVudElkLCByZWZlcmVudFVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpO1xuICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENyZWF0ZVRleHREYXRhIH0gZnJvbSBcIi4uLy4uL0FwaS9DcmVhdGUvQ3JlYXRlVGhlVGV4dERhdGFcIjtcbmltcG9ydCB7IFRoZVRleHRzIH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL1RoZVRleHRzXCI7XG5pbXBvcnQgQ3JlYXRlVGhlQ29uY2VwdCBmcm9tIFwiLi4vQ3JlYXRlVGhlQ29uY2VwdFwiO1xuaW1wb3J0IENyZWF0ZVRoZUNvbmNlcHRMb2NhbCBmcm9tIFwiLi9DcmVhdGVUaGVDb25jZXB0TG9jYWxcIjtcbmltcG9ydCBNYWtlVGhlVHlwZUNvbmNlcHRMb2NhbCBmcm9tIFwiLi9NYWtlVGhlVHlwZUxvY2FsXCI7XG5pbXBvcnQgeyBMb2NhbENvbmNlcHRzRGF0YSB9IGZyb20gXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbENvbmNlcHREYXRhXCI7XG5leHBvcnQgZnVuY3Rpb24gTWFrZVRoZUluc3RhbmNlQ29uY2VwdExvY2FsKHR5cGUsIHJlZmVyZW50LCBjb21wb3NpdGlvbiA9IGZhbHNlLCB1c2VySWQsIGFjY2Vzc0lkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCA9IDk5OSkge1xuICAgIHZhciBzZXNzaW9uSW5mb3JtYXRpb25JZCwgYWNjZXNzSWQ7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgc2Vzc2lvbkluZm9ybWF0aW9uSWQgPSA5OTk7XG4gICAgICAgIHZhciBjYXRlZ29yeUlkID0gNDtcbiAgICAgICAgdmFyIGNhdGVnb3J5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgcmVmZXJlbnRJZCA9IDA7XG4gICAgICAgIHZhciByZWZlcmVudFVzZXJJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlY3VyaXR5SWQgPSA5OTk7XG4gICAgICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgYWNjZXNzSWQgPSA0O1xuICAgICAgICB2YXIgYWNjZXNzVXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgc3RyaW5nVG9DaGVjayA9IFwiXCI7XG4gICAgICAgIHZhciBzdHJpbmdMZW5ndGggPSByZWZlcmVudC5sZW5ndGg7XG4gICAgICAgIHZhciB0eXBlQ29uY2VwdDtcbiAgICAgICAgdmFyIGNvbmNlcHQ7XG4gICAgICAgIHZhciBzdGFydHNXaXRoVGhlID0gdHlwZS5zdGFydHNXaXRoKFwidGhlX1wiKTtcbiAgICAgICAgaWYgKHN0YXJ0c1dpdGhUaGUpIHtcbiAgICAgICAgICAgIHN0cmluZ1RvQ2hlY2sgPSB0eXBlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RyaW5nVG9DaGVjayA9IFwidGhlX1wiICsgdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcG9zaXRpb24pIHtcbiAgICAgICAgICAgIHZhciB0eXBlQ29uY2VwdFN0cmluZyA9IHlpZWxkIE1ha2VUaGVUeXBlQ29uY2VwdExvY2FsKHR5cGUsIHNlc3Npb25JbmZvcm1hdGlvbklkLCB1c2VySWQsIHVzZXJJZCk7XG4gICAgICAgICAgICB0eXBlQ29uY2VwdCA9IHR5cGVDb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBDcmVhdGVUaGVDb25jZXB0TG9jYWwocmVmZXJlbnQsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgdXNlcklkLCB0eXBlQ29uY2VwdC5pZCwgdHlwZUNvbmNlcHQudXNlcklkLCByZWZlcmVudElkLCByZWZlcmVudFVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpO1xuICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RyaW5nTGVuZ3RoID4gMjU1KSB7XG4gICAgICAgICAgICB2YXIgdHlwZUNvbmNlcHRTdHJpbmcgPSB5aWVsZCBNYWtlVGhlVHlwZUNvbmNlcHRMb2NhbChzdHJpbmdUb0NoZWNrLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkLCB1c2VySWQpO1xuICAgICAgICAgICAgdHlwZUNvbmNlcHQgPSB0eXBlQ29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgQ3JlYXRlVGhlQ29uY2VwdChyZWZlcmVudCwgdXNlcklkLCBjYXRlZ29yeUlkLCB1c2VySWQsIHR5cGVDb25jZXB0LmlkLCB0eXBlQ29uY2VwdC51c2VySWQsIHJlZmVyZW50SWQsIHJlZmVyZW50VXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgICAgICBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIHZhciBUaGVUZXh0c0RhdGEgPSBuZXcgVGhlVGV4dHModXNlcklkLCByZWZlcmVudCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQsIERhdGUubm93KCkudG9TdHJpbmcoKSwgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgVGV4dERhdGFTdHJpbmcgPSB5aWVsZCBDcmVhdGVUZXh0RGF0YShUaGVUZXh0c0RhdGEpO1xuICAgICAgICAgICAgdmFyIFRleHREYXRhID0gVGV4dERhdGFTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgdHlwZUNvbmNlcHRTdHJpbmcgPSB5aWVsZCBNYWtlVGhlVHlwZUNvbmNlcHRMb2NhbChzdHJpbmdUb0NoZWNrLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkLCB1c2VySWQpO1xuICAgICAgICAgICAgdHlwZUNvbmNlcHQgPSB0eXBlQ29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIHZhciBjb25jZXB0QnlDaGFyVHlwZVN0cmluZyA9IHlpZWxkIExvY2FsQ29uY2VwdHNEYXRhLkdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGVMb2NhbChyZWZlcmVudCwgdHlwZUNvbmNlcHQuaWQpO1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRUeXBlQ2hhcmFjdGVyID0gY29uY2VwdEJ5Q2hhclR5cGVTdHJpbmc7XG4gICAgICAgICAgICAvLyB2YXIgbWFrZVRoZU5hbWVTdHJpbmcgPSBhd2FpdCBNYWtlVGhlTmFtZShyZWZlcmVudCx1c2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkLHR5cGVDb25jZXB0LmlkLCB0eXBlQ29uY2VwdC51c2VySWQsY29uY2VwdFR5cGVDaGFyYWN0ZXIgKTtcbiAgICAgICAgICAgIC8vIHZhciBtYWtlVGhlTmFtZUNvbmNlcHQgPSBtYWtlVGhlTmFtZVN0cmluZyBhcyBDb25jZXB0O1xuICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRUeXBlQ2hhcmFjdGVyO1xuICAgICAgICAgICAgaWYgKGNvbmNlcHRUeXBlQ2hhcmFjdGVyLmlkID09IDAgJiYgY29uY2VwdFR5cGVDaGFyYWN0ZXIudXNlcklkID09IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkIENyZWF0ZVRoZUNvbmNlcHRMb2NhbChyZWZlcmVudCwgdXNlcklkLCBjYXRlZ29yeUlkLCB1c2VySWQsIHR5cGVDb25jZXB0LmlkLCB0eXBlQ29uY2VwdC51c2VySWQsIDAsIDAsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKTtcbiAgICAgICAgICAgICAgICBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25jZXB0LnR5cGUgPSB0eXBlQ29uY2VwdDtcbiAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBDcmVhdGVUaGVDb25jZXB0TG9jYWwgZnJvbSBcIi4vQ3JlYXRlVGhlQ29uY2VwdExvY2FsXCI7XG5pbXBvcnQgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyTG9jYWwgZnJvbSBcIi4vR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyTG9jYWxcIjtcbmltcG9ydCB7IFNwbGl0U3RyaW5ncyB9IGZyb20gXCIuLi9TcGxpdFN0cmluZ3NcIjtcbmltcG9ydCBNYWtlVGhlQ29uY2VwdExvY2FsIGZyb20gXCIuL01ha2VUaGVDb25jZXB0TG9jYWxcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1ha2VUaGVUeXBlQ29uY2VwdExvY2FsKHR5cGVTdHJpbmcsIHNlc3Npb25JZCwgc2Vzc2lvblVzZXJJZCwgdXNlcklkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIHJlZmVyZW50SWQgPSA5OTk7XG4gICAgICAgIHZhciBzZWN1cml0eUlkID0gOTk5O1xuICAgICAgICB2YXIgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkID0gOTk5O1xuICAgICAgICB2YXIgYWNjZXNzSWQgPSA5OTk7XG4gICAgICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIGFjY2Vzc1VzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIGNhdGVnb3J5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgc2VjdXJpdHlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBleGlzdGluZ0NvbmNlcHQgPSB5aWVsZCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJMb2NhbCh0eXBlU3RyaW5nKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJleGlzdGluZyBoZXJlXCIsIHR5cGVTdHJpbmcpO1xuICAgICAgICBjb25zb2xlLmxvZyhleGlzdGluZ0NvbmNlcHQpO1xuICAgICAgICBpZiAoZXhpc3RpbmdDb25jZXB0KSB7XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdDb25jZXB0LmlkID09IDAgfHwgZXhpc3RpbmdDb25jZXB0LnVzZXJJZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNwbGl0dGVkU3RyaW5nQXJyYXkgPSBTcGxpdFN0cmluZ3ModHlwZVN0cmluZyk7XG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0dGVkU3RyaW5nQXJyYXlbMF0gPT0gdHlwZVN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdCA9IHlpZWxkIE1ha2VUaGVDb25jZXB0TG9jYWwodHlwZVN0cmluZywgdXNlcklkLCA0LCB1c2VySWQsIDUxLCB1c2VySWQsIHJlZmVyZW50SWQsIHVzZXJJZCwgc2VjdXJpdHlJZCwgdXNlcklkLCBhY2Nlc3NJZCwgdXNlcklkLCBzZXNzaW9uSWQsIHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nQ29uY2VwdCA9IGNvbmNlcHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcnlJZCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYXRlZ29yeUNvbmNlcHQgPSBNYWtlVGhlVHlwZUNvbmNlcHRMb2NhbChzcGxpdHRlZFN0cmluZ0FycmF5WzBdLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQsIHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0eXBlQ29uY2VwdCA9IHlpZWxkIE1ha2VUaGVUeXBlQ29uY2VwdExvY2FsKHNwbGl0dGVkU3RyaW5nQXJyYXlbMV0sIHNlc3Npb25JZCwgc2Vzc2lvblVzZXJJZCwgdXNlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVDb25jZXB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdCA9IHlpZWxkIENyZWF0ZVRoZUNvbmNlcHRMb2NhbCh0eXBlU3RyaW5nLCB1c2VySWQsIGNhdGVnb3J5SWQsIHVzZXJJZCwgdHlwZUNvbmNlcHQuaWQsIHVzZXJJZCwgcmVmZXJlbnRJZCwgdXNlcklkLCBzZWN1cml0eUlkLCB1c2VySWQsIGFjY2Vzc0lkLCB1c2VySWQsIHNlc3Npb25JZCwgdXNlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nQ29uY2VwdCA9IGNvbmNlcHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nQ29uY2VwdDtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IE1ha2VUaGVDaGFyYWN0ZXJEYXRhIGZyb20gXCIuL01ha2VUaGVDaGFyYWN0ZXJEYXRhXCI7XG5pbXBvcnQgTWFrZVRoZUNvbmNlcHQgZnJvbSBcIi4vTWFrZVRoZUNvbmNlcHRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1ha2VUaGVDaGFyYWN0ZXIodGhlX2NoYXJhY3Rlcl9kYXRhLCB1c2VySWQsIHNlY3VyaXR5SWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JZCkge1xuICAgIHZhciBhY2Nlc3NVc2VySWQ7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNhdGVnb3J5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgc2VjdXJpdHlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIGFjY2Vzc1VzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIGNhdGVnb3J5SWQgPSA0O1xuICAgICAgICB2YXIgdHlwZUlkID0gNTE7XG4gICAgICAgIHZhciB0eXBlVXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgc2Vzc2lvblVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHJlZmVyZW50VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgbGVuZ3RoT2ZDaGFyYWN0ZXJzID0gdGhlX2NoYXJhY3Rlcl9kYXRhLmxlbmd0aDtcbiAgICAgICAgdmFyIGNvbmNlcHQ7XG4gICAgICAgIGlmIChsZW5ndGhPZkNoYXJhY3RlcnMgPT0gMSkge1xuICAgICAgICAgICAgdmFyIHJlZmVyZW50SWQgPSB0aGVfY2hhcmFjdGVyX2RhdGEuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgIHZhciB0eXBlSWRGb3JDaGFyYWN0ZXIgPSA0OTtcbiAgICAgICAgICAgIHZhciBjaGFyYWN0ZXJEYXRhU3RyaW5nID0geWllbGQgTWFrZVRoZUNoYXJhY3RlckRhdGEodGhlX2NoYXJhY3Rlcl9kYXRhLCB1c2VySWQsIHNlY3VyaXR5SWQsIGFjY2Vzc0lkLCBzZXNzaW9uSWQpO1xuICAgICAgICAgICAgY29uY2VwdCA9IE1ha2VUaGVDb25jZXB0KHRoZV9jaGFyYWN0ZXJfZGF0YSwgdXNlcklkLCBjYXRlZ29yeUlkLCBjYXRlZ29yeVVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHR5cGVJZEZvckNoYXJhY3RlciwgdHlwZVVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JZCwgc2Vzc2lvblVzZXJJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgY2hhcmFjdGVyRGF0YVN0cmluZyA9IHlpZWxkIE1ha2VUaGVDaGFyYWN0ZXJEYXRhKHRoZV9jaGFyYWN0ZXJfZGF0YSwgdXNlcklkLCBzZWN1cml0eUlkLCBhY2Nlc3NJZCwgc2Vzc2lvbklkKTtcbiAgICAgICAgICAgIHZhciBjaGFyYWN0ZXJEYXRhID0gY2hhcmFjdGVyRGF0YVN0cmluZztcbiAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJEYXRhLmlzTmV3KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBNYWtlVGhlQ29uY2VwdCh0aGVfY2hhcmFjdGVyX2RhdGEsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgY2F0ZWdvcnlVc2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgY2hhcmFjdGVyRGF0YS5pZCwgY2hhcmFjdGVyRGF0YS51c2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQpO1xuICAgICAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBNYWtlVGhlQ29uY2VwdCh0aGVfY2hhcmFjdGVyX2RhdGEsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgY2F0ZWdvcnlVc2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgY2hhcmFjdGVyRGF0YS5pZCwgY2hhcmFjdGVyRGF0YS51c2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQpO1xuICAgICAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDcmVhdGVUaGVDaGFyYWN0ZXIgfSBmcm9tIFwiLi4vQXBpL0NyZWF0ZS9DcmVhdGVUaGVDaGFyYWN0ZXJcIjtcbmltcG9ydCB7IFRoZUNoYXJhY3RlciB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9UaGVDaGFyYWN0ZXJcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1ha2VUaGVDaGFyYWN0ZXJEYXRhKHRoZV9jaGFyYWN0ZXJfZGF0YSwgdXNlcklkLCBzZWN1cml0eUlkLCBhY2Nlc3NJZCwgc2Vzc2lvbklkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNhdGVnb3J5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgYWNjZXNzVXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgc2VjdXJpdHlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciB0aGVDaGFyYWN0ZXIgPSBuZXcgVGhlQ2hhcmFjdGVyKHVzZXJJZCwgdGhlX2NoYXJhY3Rlcl9kYXRhLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQsIFwiXCIsIGZhbHNlKTtcbiAgICAgICAgdmFyIG91dHB1dCA9IHlpZWxkIENyZWF0ZVRoZUNoYXJhY3Rlcih0aGVDaGFyYWN0ZXIpO1xuICAgICAgICB2YXIgcmV0dXJuZXIgPSBvdXRwdXQ7XG4gICAgICAgIHJldHVybiByZXR1cm5lcjtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZSB9IGZyb20gXCIuLi9BcGkvR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZVwiO1xuaW1wb3J0IENyZWF0ZVRoZUNvbmNlcHQgZnJvbSBcIi4vQ3JlYXRlVGhlQ29uY2VwdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFrZVRoZUNvbmNlcHQocmVmZXJlbnQsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgY2F0ZWdvcnlVc2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlKHJlZmVyZW50LCB0eXBlSWQpO1xuICAgICAgICB2YXIgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgIGlmIChjb25jZXB0LmlkID09IDApIHtcbiAgICAgICAgICAgIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBDcmVhdGVUaGVDb25jZXB0KHJlZmVyZW50LCB1c2VySWQsIGNhdGVnb3J5SWQsIGNhdGVnb3J5VXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIHJlZmVyZW50SWQsIHJlZmVyZW50VXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgICAgICBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQ3JlYXRlVGV4dERhdGEgfSBmcm9tIFwiLi4vQXBpL0NyZWF0ZS9DcmVhdGVUaGVUZXh0RGF0YVwiO1xuaW1wb3J0IHsgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZSB9IGZyb20gXCIuLi9BcGkvR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZVwiO1xuaW1wb3J0IHsgQ29uY2VwdCB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0XCI7XG5pbXBvcnQgeyBUaGVUZXh0cyB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9UaGVUZXh0c1wiO1xuaW1wb3J0IENyZWF0ZVRoZUNvbmNlcHQgZnJvbSBcIi4vQ3JlYXRlVGhlQ29uY2VwdFwiO1xuaW1wb3J0IHsgTWFrZVRoZU5hbWUgfSBmcm9tIFwiLi9NYWtlVGhlTmFtZVwiO1xuaW1wb3J0IE1ha2VUaGVUeXBlQ29uY2VwdCBmcm9tIFwiLi9NYWtlVGhlVHlwZUNvbmNlcHRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1ha2VUaGVJbnN0YW5jZUNvbmNlcHQodHlwZSwgcmVmZXJlbnQsIGNvbXBvc2l0aW9uID0gZmFsc2UsIHVzZXJJZCwgYWNjZXNzSWQsIHNlc3Npb25JbmZvcm1hdGlvbklkID0gOTk5KSB7XG4gICAgdmFyIHNlc3Npb25JbmZvcm1hdGlvbklkLCBhY2Nlc3NJZDtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBzZXNzaW9uSW5mb3JtYXRpb25JZCA9IDk5OTtcbiAgICAgICAgdmFyIGNhdGVnb3J5SWQgPSA0O1xuICAgICAgICB2YXIgY2F0ZWdvcnlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciByZWZlcmVudElkID0gMDtcbiAgICAgICAgdmFyIHJlZmVyZW50VXNlcklkID0gOTk5O1xuICAgICAgICB2YXIgc2VjdXJpdHlJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlY3VyaXR5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkID0gdXNlcklkO1xuICAgICAgICBhY2Nlc3NJZCA9IDQ7XG4gICAgICAgIHZhciBhY2Nlc3NVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBzdHJpbmdUb0NoZWNrID0gXCJcIjtcbiAgICAgICAgdmFyIHN0cmluZ0xlbmd0aCA9IHJlZmVyZW50Lmxlbmd0aDtcbiAgICAgICAgdmFyIHR5cGVDb25jZXB0ID0gbmV3IENvbmNlcHQoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgXCIwXCIsIDAsIDAsIDAsIDAsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgdmFyIGNvbmNlcHQ7XG4gICAgICAgIHZhciBzdGFydHNXaXRoVGhlID0gdHlwZS5zdGFydHNXaXRoKFwidGhlX1wiKTtcbiAgICAgICAgaWYgKHN0YXJ0c1dpdGhUaGUpIHtcbiAgICAgICAgICAgIHN0cmluZ1RvQ2hlY2sgPSB0eXBlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RyaW5nVG9DaGVjayA9IFwidGhlX1wiICsgdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcG9zaXRpb24pIHtcbiAgICAgICAgICAgIHZhciB0eXBlQ29uY2VwdFN0cmluZyA9IHlpZWxkIE1ha2VUaGVUeXBlQ29uY2VwdCh0eXBlLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgdXNlcklkLCB1c2VySWQpO1xuICAgICAgICAgICAgdHlwZUNvbmNlcHQgPSB0eXBlQ29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgQ3JlYXRlVGhlQ29uY2VwdChyZWZlcmVudCwgdXNlcklkLCBjYXRlZ29yeUlkLCB1c2VySWQsIHR5cGVDb25jZXB0LmlkLCB0eXBlQ29uY2VwdC51c2VySWQsIHJlZmVyZW50SWQsIHJlZmVyZW50VXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgICAgICBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdHJpbmdMZW5ndGggPiAyNTUpIHtcbiAgICAgICAgICAgIHZhciB0eXBlQ29uY2VwdFN0cmluZyA9IHlpZWxkIE1ha2VUaGVUeXBlQ29uY2VwdChzdHJpbmdUb0NoZWNrLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkLCB1c2VySWQpO1xuICAgICAgICAgICAgdHlwZUNvbmNlcHQgPSB0eXBlQ29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgQ3JlYXRlVGhlQ29uY2VwdChyZWZlcmVudCwgdXNlcklkLCBjYXRlZ29yeUlkLCB1c2VySWQsIHR5cGVDb25jZXB0LmlkLCB0eXBlQ29uY2VwdC51c2VySWQsIHJlZmVyZW50SWQsIHJlZmVyZW50VXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgICAgICBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIHZhciBUaGVUZXh0c0RhdGEgPSBuZXcgVGhlVGV4dHModXNlcklkLCByZWZlcmVudCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQsIERhdGUubm93KCkudG9TdHJpbmcoKSwgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgVGV4dERhdGFTdHJpbmcgPSB5aWVsZCBDcmVhdGVUZXh0RGF0YShUaGVUZXh0c0RhdGEpO1xuICAgICAgICAgICAgdmFyIFRleHREYXRhID0gVGV4dERhdGFTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgdHlwZUNvbmNlcHRTdHJpbmcgPSB5aWVsZCBNYWtlVGhlVHlwZUNvbmNlcHQoc3RyaW5nVG9DaGVjaywgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCwgdXNlcklkKTtcbiAgICAgICAgICAgIHR5cGVDb25jZXB0ID0gdHlwZUNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICB2YXIgY29uY2VwdEJ5Q2hhclR5cGVTdHJpbmcgPSB5aWVsZCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlKHJlZmVyZW50LCB0eXBlQ29uY2VwdC5pZCk7XG4gICAgICAgICAgICB2YXIgY29uY2VwdFR5cGVDaGFyYWN0ZXIgPSBjb25jZXB0QnlDaGFyVHlwZVN0cmluZztcbiAgICAgICAgICAgIHZhciBtYWtlVGhlTmFtZVN0cmluZyA9IHlpZWxkIE1ha2VUaGVOYW1lKHJlZmVyZW50LCB1c2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkLCB0eXBlQ29uY2VwdC5pZCwgdHlwZUNvbmNlcHQudXNlcklkLCBjb25jZXB0VHlwZUNoYXJhY3Rlcik7XG4gICAgICAgICAgICB2YXIgbWFrZVRoZU5hbWVDb25jZXB0ID0gbWFrZVRoZU5hbWVTdHJpbmc7XG4gICAgICAgICAgICBjb25jZXB0ID0gY29uY2VwdFR5cGVDaGFyYWN0ZXI7XG4gICAgICAgICAgICBpZiAoY29uY2VwdFR5cGVDaGFyYWN0ZXIuaWQgPT0gMCAmJiBjb25jZXB0VHlwZUNoYXJhY3Rlci51c2VySWQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgQ3JlYXRlVGhlQ29uY2VwdChyZWZlcmVudCwgdXNlcklkLCBjYXRlZ29yeUlkLCB1c2VySWQsIHR5cGVDb25jZXB0LmlkLCB0eXBlQ29uY2VwdC51c2VySWQsIG1ha2VUaGVOYW1lQ29uY2VwdC5pZCwgbWFrZVRoZU5hbWVDb25jZXB0LnVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpO1xuICAgICAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmKGNvbmNlcHQpe1xuICAgICAgICAvLyAgICAgaWYoY29uY2VwdC50eXBlID09IG51bGwpe1xuICAgICAgICAvLyAgICAgICAgIHZhciBjb25jZXB0VHlwZSA9IENvbmNlcHRzRGF0YS5HZXRDb25jZXB0KGNvbmNlcHQudHlwZUlkKTtcbiAgICAgICAgLy8gICAgICAgICBpZihjb25jZXB0VHlwZSA9PSBudWxsICYmIGNvbmNlcHQudHlwZUlkICE9IG51bGwgJiYgY29uY2VwdC50eXBlSWQgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgdmFyIHR5cGVDb25jZXB0U3RyaW5nTmV3ID0gYXdhaXQgR2V0Q29uY2VwdChjb25jZXB0LnR5cGVJZCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHZhciBuZXdUeXBlQ29uY2VwdCA9IHR5cGVDb25jZXB0U3RyaW5nTmV3IGFzIENvbmNlcHQ7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbmNlcHQudHlwZSA9IG5ld1R5cGVDb25jZXB0O1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICBjb25jZXB0LnR5cGUgPSB0eXBlQ29uY2VwdDtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBjb25jZXB0IHJldHVybmVkIGJ5IG1ha2UgdGhlIGluc3RhbmNlIGNvbmNlcHRcIiwgY29uY2VwdCk7XG4gICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgR2V0VGhlUmVmZXJlbnQgZnJvbSBcIi4vR2V0VGhlUmVmZXJlbnRcIjtcbmltcG9ydCBNYWtlVGhlQ2hhcmFjdGVyIGZyb20gXCIuL01ha2VUaGVDaGFyYWN0ZXJcIjtcbmltcG9ydCBNYWtlVGhlQ29uY2VwdCBmcm9tIFwiLi9NYWtlVGhlQ29uY2VwdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIE1ha2VUaGVOYW1lKHRoZUNoYXJhY3RlckRhdGEsIHVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgZXhpc3RpbmdDb25jZXB0KSB7XG4gICAgdmFyIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQ7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIG5hbWVUeXBlSWQgPSAxMjtcbiAgICAgICAgdmFyIGNhdGVnb3J5SWQgPSA0O1xuICAgICAgICB2YXIgc2Vzc2lvbklkID0gc2Vzc2lvbkluZm9ybWF0aW9uSWQgIT09IG51bGwgJiYgc2Vzc2lvbkluZm9ybWF0aW9uSWQgIT09IHZvaWQgMCA/IHNlc3Npb25JbmZvcm1hdGlvbklkIDogOTk5O1xuICAgICAgICB2YXIgc2Vzc2lvblVzZXJJZCA9IHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCAhPT0gbnVsbCAmJiBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQgIT09IHZvaWQgMCA/IHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCA6IDk5OTtcbiAgICAgICAgYWNjZXNzSWQgPSBhY2Nlc3NJZCAhPT0gbnVsbCAmJiBhY2Nlc3NJZCAhPT0gdm9pZCAwID8gYWNjZXNzSWQgOiA0O1xuICAgICAgICBhY2Nlc3NVc2VySWQgPSBhY2Nlc3NVc2VySWQgIT09IG51bGwgJiYgYWNjZXNzVXNlcklkICE9PSB2b2lkIDAgPyBhY2Nlc3NVc2VySWQgOiA5OTk7XG4gICAgICAgIHZhciBjYXRlZ29yeVVzZXJJZCA9IDk5OTtcbiAgICAgICAgdmFyIHJlZmVyZW50SW5mbztcbiAgICAgICAgdmFyIGNoYXJhY3RlckNvbmNlcHQ7XG4gICAgICAgIGlmIChleGlzdGluZ0NvbmNlcHQuaWQgPiAwICYmIGV4aXN0aW5nQ29uY2VwdC51c2VySWQgPiAwKSB7XG4gICAgICAgICAgICBjaGFyYWN0ZXJDb25jZXB0ID0geWllbGQgR2V0VGhlUmVmZXJlbnQoZXhpc3RpbmdDb25jZXB0LmlkLCBleGlzdGluZ0NvbmNlcHQudXNlcklkLCBleGlzdGluZ0NvbmNlcHQucmVmZXJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2hhcmFjdGVyQ29uY2VwdCA9ICh5aWVsZCBNYWtlVGhlQ2hhcmFjdGVyKHRoZUNoYXJhY3RlckRhdGEsIHVzZXJJZCwgc2VjdXJpdHlJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbklkKSk7XG4gICAgICAgICAgICBleGlzdGluZ0NvbmNlcHQgPSB5aWVsZCBNYWtlVGhlQ29uY2VwdCh0aGVDaGFyYWN0ZXJEYXRhLCB1c2VySWQsIGNhdGVnb3J5SWQsIGNhdGVnb3J5VXNlcklkLCBuYW1lVHlwZUlkLCB0eXBlVXNlcklkLCBjaGFyYWN0ZXJDb25jZXB0LmlkLCBjaGFyYWN0ZXJDb25jZXB0LnVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JZCwgc2Vzc2lvblVzZXJJZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nQ29uY2VwdDtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQ29uY2VwdCB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0XCI7XG5pbXBvcnQgTWFrZVRoZUNvbmNlcHQgZnJvbSBcIi4vTWFrZVRoZUNvbmNlcHRcIjtcbmltcG9ydCBNYWtlVGhlVHlwZUNvbmNlcHQgZnJvbSBcIi4vTWFrZVRoZVR5cGVDb25jZXB0XCI7XG5leHBvcnQgZnVuY3Rpb24gTWFrZVRoZVRpbWVzdGFtcCh0eXBlLCByZWZlcmVudCwgdXNlcklkLCBhY2Nlc3NJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQgPSA5OTkpIHtcbiAgICB2YXIgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIGFjY2Vzc0lkO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHNlc3Npb25JbmZvcm1hdGlvbklkID0gOTk5O1xuICAgICAgICB2YXIgY2F0ZWdvcnlJZCA9IDQ7XG4gICAgICAgIHZhciBjYXRlZ29yeVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHJlZmVyZW50SWQgPSAwO1xuICAgICAgICB2YXIgcmVmZXJlbnRVc2VySWQgPSA5OTk7XG4gICAgICAgIHZhciBzZWN1cml0eUlkID0gOTk5O1xuICAgICAgICB2YXIgc2VjdXJpdHlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIGFjY2Vzc0lkID0gNDtcbiAgICAgICAgdmFyIGFjY2Vzc1VzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHN0cmluZ1RvQ2hlY2sgPSBcIlwiO1xuICAgICAgICB2YXIgc3RhcnRzV2l0aFRoZSA9IHR5cGUuc3RhcnRzV2l0aChcInRoZV9cIik7XG4gICAgICAgIHZhciB0eXBlQ29uY2VwdCA9IG5ldyBDb25jZXB0KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIFwiMFwiLCAwLCAwLCAwLCAwLCAwLCAwLCBmYWxzZSk7XG4gICAgICAgIHZhciBjb25jZXB0O1xuICAgICAgICBpZiAoc3RhcnRzV2l0aFRoZSkge1xuICAgICAgICAgICAgc3RyaW5nVG9DaGVjayA9IHR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdHJpbmdUb0NoZWNrID0gXCJ0aGVfXCIgKyB0eXBlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0eXBlQ29uY2VwdFN0cmluZyA9IHlpZWxkIE1ha2VUaGVUeXBlQ29uY2VwdChzdHJpbmdUb0NoZWNrLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkLCB1c2VySWQpO1xuICAgICAgICB0eXBlQ29uY2VwdCA9IHR5cGVDb25jZXB0U3RyaW5nO1xuICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkIE1ha2VUaGVDb25jZXB0KHJlZmVyZW50LCB1c2VySWQsIGNhdGVnb3J5SWQsIHVzZXJJZCwgdHlwZUNvbmNlcHQuaWQsIHR5cGVDb25jZXB0LnVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKTtcbiAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgQ3JlYXRlVGhlQ29uY2VwdCBmcm9tIFwiLi9DcmVhdGVUaGVDb25jZXB0XCI7XG5pbXBvcnQgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyIGZyb20gXCIuL0dldENvbmNlcHRCeUNoYXJhY3RlclwiO1xuaW1wb3J0IE1ha2VUaGVDaGFyYWN0ZXIgZnJvbSBcIi4vTWFrZVRoZUNoYXJhY3RlclwiO1xuaW1wb3J0IHsgU3BsaXRTdHJpbmdzIH0gZnJvbSBcIi4vU3BsaXRTdHJpbmdzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWtlVGhlVHlwZUNvbmNlcHQodHlwZVN0cmluZywgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkLCB1c2VySWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgcmVmZXJlbnRJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlY3VyaXR5SWQgPSA5OTk7XG4gICAgICAgIHZhciBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQgPSA5OTk7XG4gICAgICAgIHZhciBhY2Nlc3NJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlY3VyaXR5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgYWNjZXNzVXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgY2F0ZWdvcnlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIGV4aXN0aW5nQ29uY2VwdCA9IHlpZWxkIEdldENvbmNlcHRCeUNoYXJhY3Rlcih0eXBlU3RyaW5nKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nQ29uY2VwdCkge1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nQ29uY2VwdC5pZCA9PSAwIHx8IGV4aXN0aW5nQ29uY2VwdC51c2VySWQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBzcGxpdHRlZFN0cmluZ0FycmF5ID0gU3BsaXRTdHJpbmdzKHR5cGVTdHJpbmcpO1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdHRlZFN0cmluZ0FycmF5WzBdID09IHR5cGVTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBNYWtlVGhlQ2hhcmFjdGVyKHR5cGVTdHJpbmcsIHVzZXJJZCwgc2VjdXJpdHlJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdDb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYXRlZ29yeUlkID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhdGVnb3J5Q29uY2VwdCA9IE1ha2VUaGVUeXBlQ29uY2VwdChzcGxpdHRlZFN0cmluZ0FycmF5WzBdLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQsIHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0eXBlQ29uY2VwdCA9IHlpZWxkIE1ha2VUaGVUeXBlQ29uY2VwdChzcGxpdHRlZFN0cmluZ0FycmF5WzFdLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQsIHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlQ29uY2VwdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCBDcmVhdGVUaGVDb25jZXB0KHR5cGVTdHJpbmcsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgdXNlcklkLCB0eXBlQ29uY2VwdC5pZCwgdXNlcklkLCByZWZlcmVudElkLCB1c2VySWQsIHNlY3VyaXR5SWQsIHVzZXJJZCwgYWNjZXNzSWQsIHVzZXJJZCwgc2Vzc2lvbklkLCB1c2VySWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdDb25jZXB0ID0gY29uY2VwdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhpc3RpbmdDb25jZXB0O1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIFNwbGl0U3RyaW5ncyh0eXBlU3RyaW5nKSB7XG4gICAgY29uc3QgU3BsaXR0ZWRTdHJpbmdzID0gdHlwZVN0cmluZy5zcGxpdChcIl9cIik7XG4gICAgcmV0dXJuIFNwbGl0dGVkU3RyaW5ncztcbn1cbiIsImV4cG9ydCB7IGluaXQgfTtcbmltcG9ydCBDcmVhdGVCaW5hcnlUcmVlRnJvbURhdGEgZnJvbSAnLi9TZXJ2aWNlcy9DcmVhdGVCaW5hcnlUcmVlRnJvbURhdGEnO1xuaW1wb3J0IHsgSWRlbnRpZmllckZsYWdzIH0gZnJvbSAnLi9EYXRhU3RydWN0dXJlcy9JZGVudGlmaWVyRmxhZ3MnO1xuZXhwb3J0IHsgU3BsaXRTdHJpbmdzIH0gZnJvbSAnLi9TZXJ2aWNlcy9TcGxpdFN0cmluZ3MnO1xuZXhwb3J0IHsgR2V0Q29tcG9zaXRpb25MaXN0LCBHZXRDb21wb3NpdGlvbkxpc3RXaXRoSWQgfSBmcm9tICcuL1NlcnZpY2VzL0dldENvbXBvc2l0aW9uTGlzdCc7XG5leHBvcnQgeyBHZXRDb21wb3NpdGlvbkxpc3RMb2NhbCwgR2V0Q29tcG9zaXRpb25MaXN0TG9jYWxXaXRoSWQgfSBmcm9tICcuL1NlcnZpY2VzL0xvY2FsL0dldENvbXBvc2l0aW9uTGlzdExvY2FsJztcbmV4cG9ydCB7IEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbiB9IGZyb20gJy4vQXBpL0dldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbic7XG5leHBvcnQgeyBHZXRDb21wb3NpdGlvbiwgR2V0Q29tcG9zaXRpb25XaXRoSWQgfSBmcm9tICcuL1NlcnZpY2VzL0dldENvbXBvc2l0aW9uJztcbmV4cG9ydCB7IEdldENvbXBvc2l0aW9uTG9jYWwsIEdldENvbXBvc2l0aW9uTG9jYWxXaXRoSWQgfSBmcm9tICcuL1NlcnZpY2VzL0xvY2FsL0dldENvbXBvc2l0aW9uTG9jYWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDcmVhdGVDb21wb3NpdGlvbiB9IGZyb20gJy4vU2VydmljZXMvQ3JlYXRlVGhlQ29tcG9zaXRpb24nO1xuZXhwb3J0IHsgQ3JlYXRlVGhlQ29tcG9zaXRpb25Mb2NhbCB9IGZyb20gJy4vU2VydmljZXMvTG9jYWwvQ3JlYXRlVGhlQ29tcG9zaXRpb25Mb2NhbCc7XG5leHBvcnQgeyBDcmVhdGVDb25uZWN0aW9uQmV0d2VlblR3b0NvbmNlcHRzIH0gZnJvbSAnLi9TZXJ2aWNlcy9DcmVhdGVDb25uZWN0aW9uQmV0d2VlblR3b0NvbmNlcHRzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2V0VGhlQ29uY2VwdCB9IGZyb20gJy4vU2VydmljZXMvR2V0VGhlQ29uY2VwdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1ha2VUaGVJbnN0YW5jZUNvbmNlcHQgfSBmcm9tICcuL1NlcnZpY2VzL01ha2VUaGVJbnN0YW5jZUNvbmNlcHQnO1xuZXhwb3J0IHsgTWFrZVRoZUluc3RhbmNlQ29uY2VwdExvY2FsIH0gZnJvbSAnLi9TZXJ2aWNlcy9Mb2NhbC9NYWtlVGhlSW5zdGFuY2VDb25jZXB0TG9jYWwnO1xuZXhwb3J0IHsgc3RvcmVUb0RhdGFiYXNlLCBnZXRGcm9tRGF0YWJhc2VXaXRoVHlwZSwgZ2V0RnJvbURhdGFiYXNlV2l0aFR5cGVPbGQgfSBmcm9tICcuL0RhdGFiYXNlL2luZGV4ZWRkYic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENyZWF0ZVRoZUNvbm5lY3Rpb24gfSBmcm9tICcuL1NlcnZpY2VzL0NyZWF0ZVRoZUNvbm5lY3Rpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHZXRDb25jZXB0QnlDaGFyYWN0ZXIgfSBmcm9tICcuL1NlcnZpY2VzL0dldENvbmNlcHRCeUNoYXJhY3Rlcic7XG5leHBvcnQgeyBHZXRMaW5rIH0gZnJvbSAnLi9TZXJ2aWNlcy9HZXRMaW5rJztcbmV4cG9ydCB7IEdldExpbmtlckNvbm5lY3Rpb25Gcm9tQ29uY2VwdHMgfSBmcm9tICcuL1NlcnZpY2VzL0dldExpbmtlckNvbm5lY3Rpb25Gcm9tQ29uY2VwdCc7XG5leHBvcnQgeyBEZWxldGVDb25jZXB0QnlJZCB9IGZyb20gJy4vU2VydmljZXMvRGVsZXRlQ29uY2VwdCc7XG5leHBvcnQgeyBEZWxldGVDb25uZWN0aW9uQnlJZCB9IGZyb20gJy4vU2VydmljZXMvRGVsZXRlQ29ubmVjdGlvbic7XG5leHBvcnQgeyBHZXRDb25uZWN0aW9uQnlJZCB9IGZyb20gJy4vU2VydmljZXMvR2V0Q29ubmVjdGlvbnMnO1xuZXhwb3J0IHsgTWFrZVRoZVRpbWVzdGFtcCB9IGZyb20gJy4vU2VydmljZXMvTWFrZVRoZVRpbWVzdGFtcCc7XG5leHBvcnQgeyBSZWN1cnNpdmVTZWFyY2hBcGkgfSBmcm9tICcuL0FwaS9SZWN1cnNpdmVTZWFyY2gnO1xuZXhwb3J0IHsgU3luY0RhdGEgfSBmcm9tICcuL0RhdGFTdHJ1Y3R1cmVzL1N5bmNEYXRhJztcbmV4cG9ydCB7IENvbmNlcHQgfSBmcm9tICcuL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHQnO1xuZXhwb3J0IHsgQ29uY2VwdHNEYXRhIH0gZnJvbSAnLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YSc7XG5leHBvcnQgeyBDb25uZWN0aW9uRGF0YSB9IGZyb20gJy4vRGF0YVN0cnVjdHVyZXMvQ29ubmVjdGlvbkRhdGEnO1xuaW1wb3J0IHsgR2V0RGF0YUZyb21JbmRleERiLCBHZXREYXRhRnJvbUluZGV4RGJMb2NhbCB9IGZyb20gJy4vU2VydmljZXMvR2V0RGF0YUZyb21JbmRleERiJztcbmltcG9ydCBDcmVhdGVMb2NhbEJpbmFyeVRyZWVGcm9tRGF0YSBmcm9tICcuL1NlcnZpY2VzL0xvY2FsL0NyZWF0ZUxvY2FsQmluYXJ5VHJlZUZyb21EYXRhJztcbmltcG9ydCBJbml0aWFsaXplU3lzdGVtIGZyb20gJy4vU2VydmljZXMvSW5pdGlhbGl6ZVN5c3RlbSc7XG5pbXBvcnQgeyBCYXNlVXJsIH0gZnJvbSAnLi9EYXRhU3RydWN0dXJlcy9CYXNlVXJsJztcbmV4cG9ydCB7IEJhc2VVcmwgfSBmcm9tICcuL0RhdGFTdHJ1Y3R1cmVzL0Jhc2VVcmwnO1xuZnVuY3Rpb24gaW5pdCh1cmwgPSBcIlwiLCBhaXVybCA9IFwiXCIpIHtcbiAgICBCYXNlVXJsLkJBU0VfVVJMID0gdXJsO1xuICAgIEJhc2VVcmwuQUlfVVJMID0gYWl1cmw7XG4gICAgSW5pdGlhbGl6ZVN5c3RlbSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBDcmVhdGVCaW5hcnlUcmVlRnJvbURhdGEoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIElkZW50aWZpZXJGbGFncy5pc0RhdGFMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgSWRlbnRpZmllckZsYWdzLmlzQ2hhcmFjdGVyTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIElkZW50aWZpZXJGbGFncy5pc1R5cGVMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGVsYXBzZWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgdGltZSB0YWtlbiB0byBwcmVwYXJlIGNvbmNlcHQgIGRhdGEgaXMgIFwiLCBlbGFwc2VkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIENyZWF0ZUNoYXJhY3RlckJpbmFyeVRyZWVGcm9tRGF0YSgpLnRoZW4oKCk9PntcbiAgICAgICAgLy8gICAgSWRlbnRpZmllckZsYWdzLmlzQ2hhcmFjdGVyTG9hZGVkPSB0cnVlO1xuICAgICAgICAvLyAgICBsZXQgZWxhcHNlZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnQ7XG4gICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiVGhlIHRpbWUgdGFrZW4gdG8gcHJlcGFyZSBjaGFyYWN0ZXIgZGF0YSBpcyAgXCIsIGVsYXBzZWQpO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gQ3JlYXRlVHlwZVRyZWVGcm9tRGF0YSgpLnRoZW4oKCk9PntcbiAgICAgICAgLy8gICAgSWRlbnRpZmllckZsYWdzLmlzVHlwZUxvYWRlZD0gdHJ1ZTtcbiAgICAgICAgLy8gICAgbGV0IGVsYXBzZWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0O1xuICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIlRoZSB0aW1lIHRha2VuIHRvIHByZXBhcmUgZGF0YSBpcyBcIiwgZWxhcHNlZCk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICBDcmVhdGVMb2NhbEJpbmFyeVRyZWVGcm9tRGF0YSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgSWRlbnRpZmllckZsYWdzLmlzTG9jYWxEYXRhTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIElkZW50aWZpZXJGbGFncy5pc0xvY2FsVHlwZUxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICBJZGVudGlmaWVyRmxhZ3MuaXNMb2NhbENoYXJhY3RlckxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICBsZXQgZWxhcHNlZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSB0aW1lIHRha2VuIHRvIHByZXBhcmUgbG9jYWwgY29uY2VwdCAgXCIsIGVsYXBzZWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQ3JlYXRlTG9jYWxDaGFyYWN0ZXJCaW5hcnlUcmVlRnJvbURhdGEoKS50aGVuKCgpPT57XG4gICAgICAgIC8vICAgIElkZW50aWZpZXJGbGFncy5pc0xvY2FsQ2hhcmFjdGVyTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIENyZWF0ZUxvY2FsQmluYXJ5VHlwZVRyZWVGcm9tRGF0YSgpLnRoZW4oKCk9PntcbiAgICAgICAgLy8gICAgSWRlbnRpZmllckZsYWdzLmlzTG9jYWxUeXBlTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJ0eXBlXCIsSWRlbnRpZmllckZsYWdzLmlzTG9jYWxUeXBlTG9hZGVkKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIEdldERhdGFGcm9tSW5kZXhEYkxvY2FsKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBJZGVudGlmaWVyRmxhZ3MuaXNMb2NhbENvbm5lY3Rpb25Mb2FkZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgR2V0RGF0YUZyb21JbmRleERiKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBJZGVudGlmaWVyRmxhZ3MuaXNDb25uZWN0aW9uTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIElkZW50aWZpZXJGbGFncy5pc0Nvbm5lY3Rpb25UeXBlTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBlbGFwc2VkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIHRpbWUgdGFrZW4gdG8gcHJlcGFyZSBjb25uZWN0aW9ucyAgXCIsIGVsYXBzZWQpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vICBHZXREYXRhRnJvbUluZGV4RGIoKTsgXG4vLyBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215Rm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcbi8vIC8vY29uc3QgZm9ybTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlckZvcm0nKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4vLyBjb25zdCBmb3JtMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wb3NpdGlvbkZvcm0nKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4vLyBjb25zdCBqc29uRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc29uRm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcbi8vIGNvbnN0IG5hbWVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWVmb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuLy8gY29uc3QgZ2V0bmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnZXRuYW1lJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuLy8gdmFyIGpzb24gPSB7XG4vLyAgICAgXCJhc2Rnc2FkZGZmXCI6IHtcbi8vICAgICAgICAgXCJhZGdhc2Rmc2RmXCI6IHtcbi8vICAgICAgICAgICAgIFwiYXNkZ1wiOiBcInRhbWVcIixcbi8vICAgICAgICAgICAgIFwiYnJpZGVyYXJyXCI6IFtcImhlbGxvXCIsIFwidHJlXCJdXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9O1xuLy8gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcbi8vICAgICBjb25zb2xlLmxvZyhcInN5bmNpbmdcIik7XG4vLyAgICAgU3luY0RhdGEuU3luY0RhdGFPbmxpbmUoKVxuLy8gfSwgNTAwMCk7XG4vLyBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuLy8gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgIGNvbnN0IGNvbmNlcHRJZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29uY2VwdGlkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgIGNvbnN0IGNvbmNlcHRJZCA9IGNvbmNlcHRJZEVsZW1lbnQudmFsdWU7XG4vLyAgICBHZXRDb21wb3NpdGlvbihOdW1iZXIoY29uY2VwdElkKSkudGhlbihvdXRwdXQ9Pntcbi8vICAgICBjb25zdCBqc29uRWxlbW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzb25vdXRwdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkob3V0cHV0KTtcbi8vICAgICBjb25zb2xlLmxvZyhqc29uKTtcbi8vICAgICBqc29uRWxlbW50LmlubmVySFRNTCA9IGpzb247XG4vLyAgICB9KTtcbi8vIH0pO1xuLy8gZ2V0bmFtZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGNvbmNlcHRJZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZWNvbmNlcHRpZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgY29uc3QgY29uY2VwdElkID0gY29uY2VwdElkRWxlbWVudC52YWx1ZTtcbi8vICAgICBHZXRDb21wb3NpdGlvbihOdW1iZXIoY29uY2VwdElkKSkudGhlbihvdXRwdXQ9Pntcbi8vICAgICAgICAgY29uc3QgZmlyc3ROYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaXJzdG5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgICAgICBjb25zdCBsYXN0TmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFzdG5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhvdXRwdXQpO1xuLy8gICAgICAgICBmaXJzdE5hbWVFbGVtZW50LnZhbHVlID0gb3V0cHV0Lm5hbWVkYXRhLmZpcnN0bmFtZTtcbi8vICAgICAgICAgbGFzdE5hbWVFbGVtZW50LnZhbHVlID0gb3V0cHV0Lm5hbWVkYXRhLmxhc3RuYW1lO1xuLy8gICAgIH0pO1xuLy8gIH0pO1xuLy8gbmFtZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBmaXJzdE5hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpcnN0bmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgY29uc3QgZmlyc3RuYW1lID0gZmlyc3ROYW1lRWxlbWVudC52YWx1ZTtcbi8vICAgICBjb25zdCBsYXN0TmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFzdG5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgIGNvbnN0IGxhc3RuYW1lID0gbGFzdE5hbWVFbGVtZW50LnZhbHVlO1xuLy8gICAgIHZhciBqc29uID0ge1xuLy8gICAgICAgICBcIm5hbWVkYXRhXCI6e1xuLy8gICAgICAgICAgICAgXCJmaXJzdG5hbWVcIjogZmlyc3RuYW1lLFxuLy8gICAgICAgICAgICAgXCJsYXN0bmFtZVwiOiBsYXN0bmFtZVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIGNvbnNvbGUubG9nKGpzb24pO1xuLy8gICAgIENyZWF0ZVRoZUNvbXBvc2l0aW9uKGpzb24pLnRoZW4oKHZhbHVlKT0+e1xuLy8gICAgICAgICBjb25zdCBvdXRwdXRpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdXRwdXRpZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgICAgIHZhciBjb25jZXB0ID0gdmFsdWUgYXMgQ29uY2VwdDtcbi8vICAgICAgICAgb3V0cHV0aWQuaW5uZXJIVE1MID0gY29uY2VwdC5pZC50b1N0cmluZygpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyB0aGUgdGVzdCBmb3IgZmluYWwnKTtcbi8vICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuLy8gICAgIH0pO1xuLy8gICAgIH0pO1xuLy8ganNvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9Pntcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGNvbXBvc2l0aW9uTmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzb25kYXRhXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgY29uc3QgY29tcG9zaXRpb25OYW1lID0gY29tcG9zaXRpb25OYW1lRWxlbWVudC52YWx1ZTtcbi8vICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGNvbXBvc2l0aW9uIG5hbWVcIik7XG4vLyAgICAgY29uc29sZS5sb2coY29tcG9zaXRpb25OYW1lKTtcbi8vICAgICB2YXIgam9uID0gSlNPTi5wYXJzZShjb21wb3NpdGlvbk5hbWUpO1xuLy8gICAgIENyZWF0ZVRoZUNvbXBvc2l0aW9uKGpvbikudGhlbigodmFsdWUpPT57XG4vLyAgICAgICAgIGNvbnN0IG91dHB1dGlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI291dHB1dGlkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgICAgICAgdmFyIGNvbmNlcHQgPSB2YWx1ZSBhcyBDb25jZXB0O1xuLy8gICAgICAgICBvdXRwdXRpZC5pbm5lckhUTUwgPSBjb25jZXB0LmlkLnRvU3RyaW5nKCk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHRoZSB0ZXN0IGZvciBmaW5hbCcpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4vLyAgICAgfSk7XG4vLyB9KTtcbi8vIGZvcm0zLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgY29tcG9zaXRpb25OYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcG9zaXRpb25fbmFtZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgIGNvbnN0IGNvbXBvc2l0aW9uTmFtZSA9IGNvbXBvc2l0aW9uTmFtZUVsZW1lbnQudmFsdWU7XG4vLyAgICAgR2V0Q29tcG9zaXRpb25MaXN0KGNvbXBvc2l0aW9uTmFtZSkudGhlbihvdXRwdXQ9Pntcbi8vICAgICAgICAgY29uc3QganNvbkVsZW1udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc29ub3V0cHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgICAgICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeShvdXRwdXQpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbi8vICAgICAgICAganNvbkVsZW1udC5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShqc29uKTtcbi8vICAgICB9KTtcbi8vIH0pO1xuLy8gLy8gZm9ybTIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4vLyAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vIC8vICAgICBjb25zdCB1c2VySWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VyaWRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vIC8vICAgICBjb25zdCB1c2VySWQgPSB1c2VySWRFbGVtZW50LnZhbHVlO1xuLy8gLy8gICAgIEdldEFsbFVzZXJDb25jZXB0cyhOdW1iZXIodXNlcklkKSk7XG4vLyAvLyAgICAgR2V0QWxsVXNlckNvbm5lY3Rpb25zKE51bWJlcih1c2VySWQpKS50aGVuKCgpPT57XG4vLyAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiZ290IGFsbCB0aGUgZGF0YVwiKTtcbi8vIC8vICAgICB9KTtcbi8vIC8vICB9KTtcbi8vIHdpbmRvdy5vbm1vdXNlZG93biA9IChldjogTW91c2VFdmVudCk6IGFueSA9PiB7XG4vLyAgICAgdmFyIGlzTW91c2VEb3duID0gdHJ1ZTtcbi8vICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215Q2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4vLyAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA7XG4vLyAgICAgdmFyIF9kaWZmZXJlbmNlX2Zyb21fd2luZG93ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuLy8gICAgIHZhciB3aWR0aF9kaWZmZXJlbmNlID0gMDtcbi8vICAgICB2YXIgaGVpZ2h0X2RpZmZlcmVuY2UgPSAwO1xuLy8gICAgIC8vVXBkYXRlIG1vdXNlIHBvc2l0aW9uIGF0IHRpbWUgb2YgZG93blxuLy8gICAgIHZhciBtb3VzZV94X2Nvb3JkaW5hdGUgPSBldi54IC0gX2RpZmZlcmVuY2VfZnJvbV93aW5kb3cubGVmdCArIHdpbmRvdy5zY3JvbGxYO1xuLy8gICAgIHZhciBtb3VzZV95X2Nvb3JkaW5hdGUgPSBldi55IC0gX2RpZmZlcmVuY2VfZnJvbV93aW5kb3cudG9wICsgd2luZG93LnNjcm9sbFk7XG4vLyAgICAgdmFyIHNlbGVjdGVkX2NvbmNlcHRfb2JqZWN0ID0gc2VsZWN0Q29uY2VwdE9iamVjdChtb3VzZV94X2Nvb3JkaW5hdGUsIG1vdXNlX3lfY29vcmRpbmF0ZSk7XG4vLyAgICAgd2luZG93Lm9ubW91c2Vtb3ZlID0gKGV2OiBNb3VzZUV2ZW50KTogYW55ID0+IHtcbi8vICAgICAgICAgdmFyIHByZXZpb3VzX21vdXNlX3ggPSBtb3VzZV94X2Nvb3JkaW5hdGU7XG4vLyAgICAgICAgIHZhciBwcmV2aW91c19tb3VzZV95ID0gbW91c2VfeV9jb29yZGluYXRlO1xuLy8gICAgICAgICB2YXIgbmV3X21vdXNlX3hfY29vcmRpbmF0ZSA9IGV2LnggLSBfZGlmZmVyZW5jZV9mcm9tX3dpbmRvdy5sZWZ0ICsgd2luZG93LnNjcm9sbFg7XG4vLyAgICAgICAgIHZhciBuZXdfbW91c2VfeV9jb29yZGluYXRlID0gZXYueSAtIF9kaWZmZXJlbmNlX2Zyb21fd2luZG93LnRvcCArIHdpbmRvdy5zY3JvbGxZO1xuLy8gICAgICAgICAvL2hvdyBtdWNoIGRpZCB0aGUgbW91c2UgbW92ZVxuLy8gICAgICAgICB2YXIgbW91c2VfeF9kaWZmZXJlbmNlID0gbmV3X21vdXNlX3hfY29vcmRpbmF0ZSAtIHByZXZpb3VzX21vdXNlX3g7XG4vLyAgICAgICAgIHZhciBtb3VzZV95X2RpZmZlcmVuY2UgPSBuZXdfbW91c2VfeV9jb29yZGluYXRlIC0gcHJldmlvdXNfbW91c2VfeTtcbi8vICAgICAgICAgaWYoc2VsZWN0ZWRfY29uY2VwdF9vYmplY3Qpe1xuLy8gICAgICAgICAgICAgaWYoaXNNb3VzZURvd24pe1xuLy8gICAgICAgICAgICAgICAgIHNlbGVjdGVkX2NvbmNlcHRfb2JqZWN0LnggPSBuZXdfbW91c2VfeF9jb29yZGluYXRlO1xuLy8gICAgICAgICAgICAgICAgIHNlbGVjdGVkX2NvbmNlcHRfb2JqZWN0LnkgPSBuZXdfbW91c2VfeV9jb29yZGluYXRlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIHdpbmRvdy5vbm1vdXNldXAgPSAoZXY6IE1vdXNlRXZlbnQpOiBhbnkgPT4ge1xuLy8gICAgICAgICBpc01vdXNlRG93biA9IGZhbHNlO1xuLy8gICAgICAgICBzZWxlY3RlZF9jb25jZXB0X29iamVjdCAgPSBudWxsO1xuLy8gICAgIH1cbi8vfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mftsccs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mftsccs */ "./node_modules/mftsccs/dist/bundle.js");
/* harmony import */ var mftsccs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mftsccs__WEBPACK_IMPORTED_MODULE_0__);

(0,mftsccs__WEBPACK_IMPORTED_MODULE_0__.init)("https://devboom.freeschema.com", "https://devai.freeschema.com");

//signUp form2
var form2 = document.getElementById('form2');
if (form2) {
    document.getElementById('form2').addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Create a FormData object to gather form data
        const formData = new FormData(event.target);
        console.log(formData);

        // Send a POST request using the Fetch API
        fetch('https://devboom.freeschema.com/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fname: formData.get('fname'),
                lname: formData.get('lname'),
                email: formData.get('email'),
                password: formData.get('password'),
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // You can handle the server response here
                if (data.error == true) {

                    const errorDiv = document.createElement('div');
                    let errorMessage = data.message;

                    errorDiv.textContent = errorMessage;
                    errorDiv.style.color = 'red';
                    errorDiv.style.fontWeight = '800';
                    const errorContainer = document.getElementById('error-container');
                    errorContainer.innerHTML = '';
                    errorContainer.appendChild(errorDiv);

                }
                if (data.success == true) {
                    const successDiv = document.createElement('div');
                    let successMessage = data.message;

                    successDiv.textContent = successMessage;
                    successDiv.style.color = 'green';
                    successDiv.style.fontWeight = '800';
                    const errorContainer = document.getElementById('error-container');
                    errorContainer.innerHTML = '';
                    errorContainer.appendChild(successDiv);
                }


            })
            .catch(error => {
                console.error('Error:', error);


                // Handle errors here


            });

        document.getElementById("form2").reset();
    });
}


// logIn form1
var loginform = document.getElementById('loginform');
if (loginform) {
    document.getElementById('loginform').addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        fetch('https://devboom.freeschema.com/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        }) 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Login failed');
                }
                return response.json();

            })
            .then(data => {
                console.log('Login success:', data, data.data);
                window.location.href = 'pform.html';

                localStorage.setItem("token", data.data.token);
                localStorage.setItem("userId",data.data.entity[0].userId);
                // Handle successful login, e.g., redirect to a new page
            })
            .catch(error => {
                console.error('Login error:', error);

                if (error instanceof Response) {
                    console.log('Response status:', error.status);
                    error.text().then(text => console.log('Response text:', text));
                }


                const errorContainer = document.getElementById('error1-container');
                errorContainer.innerHTML = 'Login failed. Please check your credentials.';
            });
        document.getElementById("loginform").reset();
    });
}
// pform
var sub = document.getElementById('sub');
if (sub) {
    document.getElementById("sub").onclick = function (event) {
        var ProductName = document.getElementById("fname").value;
        var ProductPrice = document.getElementById("lname").value;
        var ProductSize = document.getElementById("country").value;
        if (ProductName == "" || ProductPrice == "") {
            alert("product name and price must be filled")
        }
        else {
            alert("submitted Successfully");
            event.preventDefault();
            createTheProduct(ProductName, ProductPrice, ProductSize);
        }
    }
     
    var user_id =  localStorage.getItem('userId');


    async function createTheProduct(name, price, size) {
        console.log("this is user id ", user_id);
        var mainConcept = await (0,mftsccs__WEBPACK_IMPORTED_MODULE_0__.MakeTheInstanceConcept)("E-product", "", true, user_id , 4);
        var nameConcept = await (0,mftsccs__WEBPACK_IMPORTED_MODULE_0__.MakeTheInstanceConcept)("name", name, false, user_id , 4);
        var priceConcept = await (0,mftsccs__WEBPACK_IMPORTED_MODULE_0__.MakeTheInstanceConcept)("price", price, false, user_id , 4);
        var sizeConcept = await (0,mftsccs__WEBPACK_IMPORTED_MODULE_0__.MakeTheInstanceConcept)("size", size, false, user_id , 4);
        (0,mftsccs__WEBPACK_IMPORTED_MODULE_0__.CreateTheConnection)(mainConcept.id, mainConcept.userId, nameConcept.id, nameConcept.userId, mainConcept.id, 999, 999);
        (0,mftsccs__WEBPACK_IMPORTED_MODULE_0__.CreateTheConnection)(mainConcept.id, mainConcept.userId, priceConcept.id, priceConcept.userId, mainConcept.id, 999, 999);
        (0,mftsccs__WEBPACK_IMPORTED_MODULE_0__.CreateTheConnection)(mainConcept.id, mainConcept.userId, sizeConcept.id, sizeConcept.userId, mainConcept.id, 999, 999);
        await mftsccs__WEBPACK_IMPORTED_MODULE_0__.SyncData.SyncDataOnline();
        console.log("This is the product that i created just now", await (0,mftsccs__WEBPACK_IMPORTED_MODULE_0__.GetCompositionWithId)(mainConcept.id));
        document.getElementById("yourFormId").reset();
    }

}
// Function to handle the logout process
function logout() {
    // Clear user session data
    localStorage.removeItem('token');

    // Redirect to the login page
    window.location.href = 'index.html';
}

// Attach a click event listener to the logout button
document.getElementById('logoutButton').addEventListener('click', function () {
    // Call the logout function when the button is clicked
    logout();
});

let protable = document.getElementById('pro-table');
if (protable) {
    // var productList = await GetCompositionList("E-product", 999, 5, 1);

    var data = await (0,mftsccs__WEBPACK_IMPORTED_MODULE_0__.GetCompositionListWithId)("E-product",user_id, 100, 1);


    console.log("this is the consoled data ", data);
    // Reference to the table body
    var tableBody = document.getElementById('tableBody');
    // Loop through the data array and create table rows
    for (var i = 0; i < data.length; i++) {
        // var composition = await GetCompositionWithId(data[i]);
        // console.log("this is the composition", composition);
        var row = tableBody.insertRow(data[i]);
        // Create cells and populate them with data
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.textContent = data[i].id;
        cell2.textContent = data[i]["data"]["E-product"].name;
        cell3.textContent = data[i]["data"]["E-product"].price;
        cell4.textContent = data[i]["data"]["E-product"].size;
        var updatebutton = document.createElement('button');
        updatebutton.textContent = 'Update';
        updatebutton.id = 'updateid' + i;
        updatebutton.onclick = togglePopup;
        cell5.appendChild(updatebutton);
    }

    function togglePopup() {
        var overlay = document.getElementById('myForm');
        overlay.style.display = (overlay.style.display === 'none' || overlay.style.display === '') ? 'flex' : 'none';
    }

}



// update details

let updateDetail = document.getElementById('popup-form-container');
if (updateDetail) {
    document.getElementById('popup-form-container').addEventListener('submit', function (event) {

        event.preventDefault();
        const ID = document.getElementById('pro-id').value;
        const updatedProName = document.getElementById('updated-name').value;

        const updatedPrice = document.getElementById('updated-price').value;
        const updatedSize = document.getElementById('size').value;
        const token = localStorage.getItem('token');

        fetch('https://devboom.freeschema.com/api/updatev2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Add the Authorization header with your API key or token
            },
            body: JSON.stringify({
                "E-product": {
                    name: updatedProName,
                    price: updatedPrice,
                    size: updatedSize
                },
                id: ID

            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(updatedProName => {
                console.log('Data successfully updated:', updatedProName);
                // Handle the updated data as needed
            })
            .then(updatedPrice => {
                console.log('Data successfully updated:', updatedPrice);
                // Handle the updated data as needed
            })
            .then(updatedSize => {
                console.log('Data successfully updated:', updatedSize);
                // Handle the updated data as needed
            })
            .catch(error => {
                console.error('Error updating data:', error);
                // Handle errors
            });
    })
}




//createTheProduct(200, "pant", "sadfsadf");

// var output = await GetCompositionList("ecommerceProduct",999,3);

// console.log("This is the list of ecommerce Products", output);

// async function createTheProduct(price, name, description){
// var mainConcept = await MakeTheInstanceConcept("ecommerceProduct","",true,999,4,999);
// var priceConcept = await MakeTheInstanceConcept("price", price,false, 999,4,999);
// var nameConcept = await MakeTheInstanceConcept("name", name, false, 999, 4, 999);
// CreateTheConnection(mainConcept.id, mainConcept.userId, priceConcept.id, priceConcept.userId, mainConcept.id, 999, 999);
// CreateTheConnection(mainConcept.id, mainConcept.userId, nameConcept.id, nameConcept.userId, mainConcept.id, 999,999);

// await SyncData.SyncDataOnline();
// console.log("This is the product that i created",await GetCompositionWithId(mainConcept.id));
// }
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;