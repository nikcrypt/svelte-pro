const production = !process.env.ROLLUP_WATCH;


module.exports = {
  mode: "jit",
  content: ["./src/**/*.svelte",
  ],
};