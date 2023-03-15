import { searchData } from "./getData";
import RenderUi from "./RenderUi";
import { debounce } from "lodash/function.js";

export let search = debounce((e) => {
  const data = searchData(e.target.value);
  data.then((response) => {
    console.log(response);
    RenderUi(response);
  });
}, 1000);
