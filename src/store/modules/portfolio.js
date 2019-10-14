const state = {
  funds: 10000,
  stocks: [],
};

const mutations = {
  'BUY_STOCK'(state, { stockId, quantity }) {
    const record = state.stocks.find(stock => stock.id === stockId);

    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity,
      });
    }

    state.funds -= stockPrice * quantity;
  },
  'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
    const { stocks } = state;
    const record = stocks.find(stock => stock.id === stockId);

    if (record.quatity > quantity) {
      record.quantity -= quantity;
    } else {
      stocks.splice(stocks.indexOf(record), 1);
    }

    state.funds += stockPrice * quantity;
  },
  'SET_PORTFOLIO'(state, portfolio) {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  },
};

const actions = {
  sellStock({ commit }, order) {
    commit('SELL_STOCK', order);
  },
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(s => s.id === stock.id);
      
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price,
      };
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
}