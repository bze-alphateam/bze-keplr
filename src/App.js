import List from "./components/List";

const BZE_PREFIX = "bze";
const BZE_CG_ID = "bzedge";

const TESTNET_COIN_DENOM = "testbze";
const TESTNET_COIN_MIN_DENOM = "utestbze";

const RPC_URL = "http://testnet-rpc.getbze.com:26657";
const REST_URL = "https://testnet.getbze.com";

const BZE_TESTNET_1_SUGGEST_CHAIN = {
  chainId: "bzetestnet-1",
  chainName: "BZE Testnet 1",
  rpc: RPC_URL,
  rest: REST_URL,
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: BZE_PREFIX,
    bech32PrefixAccPub: BZE_PREFIX + "pub",
    bech32PrefixValAddr: BZE_PREFIX + "valoper",
    bech32PrefixValPub: BZE_PREFIX + "valoperpub",
    bech32PrefixConsAddr: BZE_PREFIX + "valcons",
    bech32PrefixConsPub: BZE_PREFIX + "valconspub",
  },
  currencies: [
    {
      coinDenom: TESTNET_COIN_DENOM,
      coinMinimalDenom: TESTNET_COIN_MIN_DENOM,
      coinDecimals: 6,
      coinGeckoId: BZE_CG_ID,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: TESTNET_COIN_DENOM,
      coinMinimalDenom: TESTNET_COIN_MIN_DENOM,
      coinDecimals: 6,
      coinGeckoId: BZE_CG_ID,
    },
  ],
  stakeCurrency: {
    coinDenom: TESTNET_COIN_DENOM,
    coinMinimalDenom: TESTNET_COIN_MIN_DENOM,
    coinDecimals: 6,
    coinGeckoId: BZE_CG_ID,
  },
  coinType: 118,
  gasPriceStep: {
    low: 0.01,
    average: 0.1,
    high: 1,
  },
};

const ITEMS = [
  {
    id: BZE_TESTNET_1_SUGGEST_CHAIN.chainId,
    title: BZE_TESTNET_1_SUGGEST_CHAIN.chainName,
    networkDetails: BZE_TESTNET_1_SUGGEST_CHAIN
  }
];

function App() {

  return (
    <section>
      <h1>Available Networks</h1>
      <List items={ITEMS}/>
    </section>
  );
}

export default App;
