<template>
  <div class="navbar_d_wrapper" :class="{ busy: busy }">
    <img :src="item.image" class="logo" alt="logo" />
    <div class="list_wrapper">
      <span> {{ item.services }} </span>
      <span> {{ item.products }} </span>
      <span> {{ item.projects }} </span>
      <span> {{ item.crop_applications }} </span>
      <span> {{ item.about_us }} </span>
      <span> {{ item.contact_us }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarDemo',
  props: ['item', 'busy'],
}
</script>

<style lang="scss" scoped>
.navbar_d_wrapper {
  background-color: #f6f7f8;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 20px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.65);
    border-radius: 10px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.25s;
  }
  &.busy::before {
    opacity: 1;
    visibility: visible;
  }
  .logo {
    width: 75px;
    height: 58px;
  }
  .list_wrapper {
    display: flex;
    align-items: center;
    span {
      font-size: 14px;
      font-weight: 400;
      margin-left: 18px;
    }
  }
}

@media (max-width: 991px) {
  .navbar_d_wrapper {
    display: none;
  }
}
</style>