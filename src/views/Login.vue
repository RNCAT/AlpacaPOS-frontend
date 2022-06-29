<template>
  <div class="container">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-two-fifths">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">ระบบขายหน้าร้านบนเว็บแอปพลิเคชัน</p>
            <button class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </header>
          <div class="card-content">
            <b-field label="อีเมล">
              <b-input value="johnsilver" maxlength="30"></b-input>
            </b-field>

            <b-field label="รหัสผ่าน">
              <b-input value="123" type="password" maxlength="30"></b-input>
            </b-field>

            <b-field>
              <b-button type="is-primary" expanded>เข้าสู่ระบบ</b-button>
            </b-field>
          </div>
        </div>
      </div>
      <div class="column">Third column</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
