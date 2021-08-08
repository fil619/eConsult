import BaseCheckBox from "@/base/_base-checkbox.vue"
import { mount } from "@vue/test-utils"

describe("BaseCheckBox", () => {
  it("checkbox emits an event", () => {
    const wrapper = mount(BaseCheckBox)
    wrapper.vm.EmitEvent()
  })
})