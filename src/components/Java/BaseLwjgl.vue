<template>
  <div class="container-fluid">
    <h3><slot name="title"></slot></h3>
    <div><slot name="description"></slot></div>
    <div class="javaTable">
      <label>接口总结</label>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>接口</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <slot name="interface-table"></slot>
        </tbody>
      </table>
    </div>
    <div class="javaTable">
      <label>枚举总结</label>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>枚举</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <slot name="enum-table"></slot>
        </tbody>
      </table>
    </div>
    <div class="javaTable">
      <label>类总结</label>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>类</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <slot name="class-table"></slot>
        </tbody>
      </table>
      <div class="javaTable">
        <label>枚举总结</label>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>枚举</th>
              <th>描述</th>
            </tr>
          </thead>
          <tbody>
            <slot name="enum-table"></slot>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  margin: 4rem 0 3rem 0;
}

.javaTable {
  margin-top: 4rem;
}

label {
  background-color: #ec6f1b;
  margin-bottom: 0;
  padding: 5px;
  font-weight: 600;
}

thead {
  background-color: #808080;
}
</style>