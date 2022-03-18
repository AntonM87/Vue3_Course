<template>
    <div class="app">
      <h1>Страница с записями</h1>
      <MyInput v-model="searchQuery"/>
      <div class="app_btns">
        <MyButton @click="showDialog">Создать запись</MyButton>
        <SelectList
            :title="'Как сортировать?'"
            :options="sortOptions"
            v-model="selectedSort"/>
      </div>
      <DialogWindow v-model:show="dialogVisible">
        <PostForm/>
      </DialogWindow>
      <PostList
          :posts="sortedAndSearchedPosts"
          v-if="!isPostLoadingIndicator"/>
      <LoadingInidcator v-else/>
      <h2 v-if="posts.length === 0" style="color: red">Список пока пуст</h2>
    </div>
    <div v-intersection="{loadMorePosts, page}" ref="observer" class="observer"></div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import DialogWindow from "@/components/UI/DialogWindow";
import MyButton from "@/components/UI/MyButton";
import LoadingInidcator from "@/components/UI/LoadingIndicator";
import SelectList from "@/components/UI/SelectList";
import MyInput from "@/components/UI/MyInput";
import {usePosts} from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

export default {
  name: 'PostPage',
  components: {MyInput, SelectList, LoadingInidcator, MyButton, DialogWindow, PostList, PostForm},
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'По по загловку'},
        {value: 'body', name: 'По содержимому'},
      ]
    }
  },
  setup() {

    const {posts, totalPages, isPostLoadingIndicator} = usePosts(10);
    console.log('isPostLoadingIndicator',isPostLoadingIndicator)
    const {selectedSort, sortedPosts} =  useSortedPosts(posts);
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts);

    return {
      posts, totalPages, isPostLoadingIndicator,
      selectedSort, sortedPosts,
      searchQuery, sortedAndSearchedPosts,
    }
  }
}
</script>

<style lang="scss">
h1 {
  margin-bottom: 1rem;
}

.app_btns {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.app {
  padding: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-bottom: 2rem;
}

.page-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
}

.page {
  margin: 0.15rem 0.25rem;
  padding: 0.15rem 0.25rem;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background: #e7e7e7;
  }
}

.current-page {
  border: 2px solid teal;

}

.observer {
  width: 100%;
  height: 10px;
  background: teal;
}
</style>