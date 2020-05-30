const state = {
    stocks: [],
    funds: 10000
};
const mutations = {
    'BUY_STOCK' (state, {stockID, stockPrice, quantity}) {
        const record = state.stocks.find(element => element.id==stockID);
        if(record) {
            record.quantity += quantity;
        }else{
            state.stocks.push({
                ID: stockID,
                quantity: quantity
            });
        }
        state.funds -= stockPrice* quantity;

    },
    'SELL_STOCK'(state, {stockID,stockPrice,quantity}) {
        const record = state.stocks.find(element => element.id==stockID);
        if(record.quantity > quantity) {
           record.quantity -= quantity; 
        }else{
            state.stocks.splice(state.stocks.indexof(record), 1);
        }
        state.funds += stockPrice* quantity;

    }
};

const actions = {
    sellStock: ({commit}, order) => {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio (state) {
        return state.stocks.map(stock => {
            //const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
              //  name: record.name,
                //price: record.price
            }
        });
    },
    funds (state) {
      return state.funds;
    }
};
export default{
    state,
    mutations,
    actions,
    getters
};