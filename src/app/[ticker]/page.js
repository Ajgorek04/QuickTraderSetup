const PARAM_TO_WORD = {
  btc: "Bitcoin",
  ltc: "Litecoin",
  eth: "Ethereum",
};

export default function DynamiRoute({ params }) {
  return <h2> {PARAM_TO_WORD[params.ticker]} </h2>;
}

export async function generateStaticParams() {
  return [
    {
      ticker: "btc",
    },
    {
      ticker: "ltc",
    },
    {
      ticker: "eth",
    },
  ];
}
