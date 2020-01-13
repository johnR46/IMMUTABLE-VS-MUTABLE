{
    let MenuId;
    (function (MenuId) {
        MenuId["FEATONE"] = "FEATONE";
        MenuId["FEATTWO"] = "FEATTWO";
        MenuId["FEATTHREE"] = "FEATTHREE";
        MenuId["FEAFOUR"] = "FEAFOUR";
        MenuId["FEATFIVE"] = "FEATFIVE";
    })(MenuId || (MenuId = {}));
    class FeatStore {
        constructor(criteria, formValue, activeIndex, mode, result) {
            this.criteria = criteria;
            this.formValue = formValue;
            this.activeIndex = activeIndex;
            this.mode = mode;
            this.result = result;
        }
        setCriteria(criteria) {
            this.criteria = criteria;
        }
        setFormValue(form) {
            this.formValue = form;
        }
        getCriteria() {
            return this.criteria;
        }
        getFormValue() {
            return this.formValue;
        }
        setActiveIndex(index) {
            this.activeIndex = index;
        }
        setMode(mode) {
            this.mode = mode;
        }
        setResult(result) {
            this.result = result;
        }
        getResult() {
            return this.result;
        }
        getMode() {
            return this.mode;
        }
        getActiveIndex() {
            return this.activeIndex;
        }
    }
    function convertEnumFeatKeyToPropFeatKey() {
        const result = [MenuId].reduce((prv, cur) => {
            return Object.assign(Object.assign({}, prv), cur);
        }, {});
        return result;
    }
    function initialPropFeatKey(menuKey) {
        const initialPropFeatKey = Object.keys(menuKey).map(v => {
            return v;
        });
        return initialPropFeatKey;
    }
    function initialAllStoreWithFeatKey(featKey) {
        const result = featKey.map(prop => {
            return {
                [prop]: new FeatStore({}, {}, -1, 'NONE', [])
            };
        });
        return result;
    }
    function selectStoreWithFeatKey(menu, store) {
        const result = store.filter(cur => cur[menu]);
        return result[0][menu];
    }
    function updateCriteriaInStore(criteria, store) {
        const updated = new FeatStore(criteria, store.getFormValue(), store.getActiveIndex(), store.getMode(), store.getResult());
        return updated;
    }
    function updateFormValueInStore(form, store) {
        const updated = new FeatStore(store.getCriteria(), form, store.getActiveIndex(), store.getMode(), store.getResult());
        return updated;
    }
    function updateActiveIndexInStore(index, store) {
        const updated = new FeatStore(store.getCriteria(), store.getFormValue(), index, store.getMode(), store.getResult());
        return updated;
    }
    function InsertResultInStore(result, store) {
        const oldResult = store.getResult();
        const newResult = result.concat(oldResult);
        const updated = new FeatStore(store.getCriteria(), store.getFormValue(), store.getActiveIndex(), store.getMode(), newResult);
        return updated;
    }
    function updateModeInStore(mode, store) {
        const updated = new FeatStore(store.getCriteria(), store.getFormValue(), store.getActiveIndex(), mode, store.getResult());
        return updated;
    }
    function InsertResultWithFormValueInStore(form, store) {
        const oldResult = store.getResult();
        const newResult = [form].concat(oldResult);
        const updated = new FeatStore(store.getCriteria(), store.getFormValue(), store.getActiveIndex(), store.getMode(), newResult);
        return updated;
    }
    function updateResultWithIndex(index, formVal, oldResult) {
        const newResult = oldResult.map((value, indexValue) => {
            if (indexValue === index) {
                return formVal;
            }
            else {
                return value;
            }
        });
        return newResult;
    }
    const allMenuIdKey = convertEnumFeatKeyToPropFeatKey();
    const allPropKey = initialPropFeatKey(allMenuIdKey);
    const allInitialStore = initialAllStoreWithFeatKey(allPropKey);
    // console.log(allInitialStore[0]);
    const featone = selectStoreWithFeatKey(MenuId.FEATONE, allInitialStore);
    const updateRes = InsertResultWithFormValueInStore({ code: '1', name: 'b' }, featone);
    const updateRes2 = InsertResultWithFormValueInStore({ code: '2', name: '3' }, updateRes);
    const active = updateActiveIndexInStore(0, updateRes2); // update
    const oldResx = updateRes2.getResult(); //oldResult
    const formVal = { code: 'aaa', name: 'bbbb' }; // formValue
    const newResult = updateResultWithIndex(1, formVal, oldResx);
    console.log(newResult);
    // const upCriteria = updateCriteriaInStore(
    //   {
    //     Search: {
    //       name: 'a'
    //     }
    //   },
    //   featone
    // );
    // console.log(upCriteria);
    // console.log(allInitialStore);
}
