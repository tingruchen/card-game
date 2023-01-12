import { expect, describe, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "components/HelloWorld.vue";

describe("HelloWorld", () => {
  const msg = "HelloWorld";
  const wrapper = shallowMount(HelloWorld, {
    propsData: {
      msg
    }
  });

  test("msg should be HelloWorld", () => {
    expect(wrapper.find(`[data-e2e="fail"]`).text()).to.equal(msg);
  });
});
