{
  type MODE = 'CREATE' | 'UPDATE' | 'VIEW' | 'INACTIVE' | 'NONE';
  enum MenuId {
    'FEATONE' = 'FEATONE',
    'FEATTWO' = 'FEATTWO',
    'FEATTHREE' = 'FEATTHREE',
    'FEAFOUR' = 'FEAFOUR',
    'FEATFIVE' = 'FEATFIVE'
  }

  interface TodoStore {
    [featKey: string]: FeatStore;
  }

  class FeatStore {
    constructor(
      private criteria: Object,
      private formValue: Object,
      private activeIndex: number,
      private mode: MODE,
      private result: Array<Object>
    ) {}

    setCriteria(criteria: Object): void {
      this.criteria = criteria;
    }

    setFormValue(form: Object): void {
      this.formValue = form;
    }

    getCriteria(): Object {
      return this.criteria;
    }

    getFormValue(): Object {
      return this.formValue;
    }

    setActiveIndex(index: number): void {
      this.activeIndex = index;
    }
    setMode(mode: MODE): void {
      this.mode = mode;
    }

    setResult(result: Array<Object>) {
      this.result = result;
    }

    getResult(): Array<Object> {
      return this.result;
    }
    getMode(): MODE {
      return this.mode;
    }
    getActiveIndex(): number {
      return this.activeIndex;
    }
  }

  function convertEnumFeatKeyToPropFeatKey(): Object {
    const result = [MenuId].reduce((prv, cur) => {
      return { ...prv, ...cur };
    }, {});
    return result;
  }

  function initialPropFeatKey(menuKey: Object): string[] {
    const initialPropFeatKey = Object.keys(menuKey).map(v => {
      return v;
    });
    return initialPropFeatKey;
  }

  function initialAllStoreWithFeatKey(featKey: string[]): TodoStore[] {
    const result: TodoStore[] = featKey.map(prop => {
      return {
        [prop]: new FeatStore({}, {}, -1, 'NONE', [])
      };
    });
    return result;
  }

  function selectStoreWithFeatKey(menu: MenuId, store: TodoStore[]): FeatStore {
    const result = store.filter(cur => cur[menu]);
    return result[0][menu];
  }

  function updateCriteriaInStore(
    criteria: Object,
    store: FeatStore
  ): FeatStore {
    const updated = new FeatStore(
      criteria,
      store.getFormValue(),
      store.getActiveIndex(),
      store.getMode(),
      store.getResult()
    );
    return updated;
  }

  function updateFormValueInStore(form: Object, store: FeatStore): FeatStore {
    const updated = new FeatStore(
      store.getCriteria(),
      form,
      store.getActiveIndex(),
      store.getMode(),
      store.getResult()
    );
    return updated;
  }

  function updateActiveIndexInStore(
    index: number,
    store: FeatStore
  ): FeatStore {
    const updated = new FeatStore(
      store.getCriteria(),
      store.getFormValue(),
      index,
      store.getMode(),
      store.getResult()
    );
    return updated;
  }

  function InsertResultInStore(
    result: Array<Object>,
    store: FeatStore
  ): FeatStore {
    const oldResult = store.getResult();
    const newResult = result.concat(oldResult);
    const updated = new FeatStore(
      store.getCriteria(),
      store.getFormValue(),
      store.getActiveIndex(),
      store.getMode(),
      newResult
    );
    return updated;
  }

  function updateModeInStore(mode: MODE, store: FeatStore): FeatStore {
    const updated = new FeatStore(
      store.getCriteria(),
      store.getFormValue(),
      store.getActiveIndex(),
      mode,
      store.getResult()
    );
    return updated;
  }

  function InsertResultWithFormValueInStore(
    form: Object,
    store: FeatStore
  ): FeatStore {
    const oldResult = store.getResult();
    const newResult = [form].concat(oldResult);

    const updated = new FeatStore(
      store.getCriteria(),
      store.getFormValue(),
      store.getActiveIndex(),
      store.getMode(),
      newResult
    );
    return updated;
  }

  function updateResultWithIndex(
    index: number,
    formVal: Object,
    oldResult: Array<Object>
  ): Array<Object> {
    const newResult = oldResult.map((value, indexValue) => {
      if (indexValue === index) {
        return formVal;
      } else {
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
  const updateRes = InsertResultWithFormValueInStore(
    { code: '1', name: 'b' },
    featone
  );

  const updateRes2 = InsertResultWithFormValueInStore(
    { code: '2', name: '3' },
    updateRes
  );

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
