<template>
  <div :class="['sidebar', { collapsed: isCollapsed }]">
    <!-- 根據 isCollapsed 判斷是否顯示 LearnLink -->
    <div v-if="!isCollapsed" class="site-name">LearnLink</div>
    
    <button class="toggle-btn" @click="toggleMenu">☰</button>
    <div v-if="!isCollapsed" class="menu">
      <router-link to="/">主頁</router-link>
      <router-link to="/search">搜尋</router-link>
      <router-link to="/timeline">時間軸</router-link>
      <router-link to="/todo">待辦事項</router-link>
      <router-link to="/courses">選修課程</router-link>
      <router-link to="/messages">訊息</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style scoped>
/* Sidebar 樣式 */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  background-color: #b5d9dc;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  transition: width 0.3s ease;
}

/* 當 Sidebar 縮小時 */
.sidebar.collapsed {
  width: 50px;
  padding: 0;
}

/* 新增網站名稱樣式 */
.site-name {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
}

/* 按鈕樣式 */
.toggle-btn {
  position: absolute;
  right: -25px;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: #444;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}

/* 菜單樣式 */
.menu {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 超連結樣式 */
.menu a {
  color: #333;
  text-decoration: none;
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, background 0.3s;
}

.menu a:hover {
  background-color: #e0f0f0;
  transform: translateY(-2px);
}
</style>
