<script setup lang="ts">
defineProps<{ title: string, description?: string, dir?: string, home?: boolean, logo?: string, shot?: string }>()
</script>

<template>
  <div
    tw="w-full h-full flex flex-col"
    style="position:relative;overflow:hidden;display:flex;flex-direction:column;background:linear-gradient(135deg, #0d0b16, #16122a)"
  >
    <div style="position:absolute;display:flex;left:0;top:0;width:1200px;height:628px;background:radial-gradient(900px 600px at 85% 30%, rgba(155,123,255,0.22), transparent 60%)" />
    <div style="position:absolute;display:flex;left:0;top:0;width:1200px;height:628px;background:radial-gradient(700px 500px at 0% 100%, rgba(232,196,104,0.1), transparent 60%)" />

    <div v-if="home" style="position:relative;display:flex;flex-direction:column;width:100%;flex-grow:1;min-height:0">
      <div style="position:absolute;display:flex;left:480px;top:-120px;width:760px;height:760px;background:radial-gradient(500px 500px at 50% 50%, rgba(155,123,255,0.25), transparent 70%)" />
      <div style="position:absolute;display:flex;left:560px;top:66px;width:860px;border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,0.12);box-shadow:0 20px 40px rgba(0,0,0,0.6)">
        <img v-if="shot" :src="shot" style="display:block;width:100%">
      </div>
      <div style="position:absolute;left:64px;top:0;bottom:0;width:470px;display:flex;flex-direction:column;justify-content:center">
        <img v-if="logo" :src="logo" style="width:100px;height:100px;margin-bottom:28px">
        <div style="font-size:80px;font-weight:700;letter-spacing:-1.5px;line-height:1;color:#f3eefb">
          Tsumige
        </div>
        <div v-if="description" style="font-size:30px;font-weight:500;line-height:1.35;color:#d9d0ec;margin-top:30px" v-html="description" />
        <div style="display:flex;gap:10px;margin-top:34px">
          <span style="font-size:18px;font-weight:600;color:#f3eefb;padding:8px 16px;border-radius:999px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14)">Linux</span>
          <span style="font-size:18px;font-weight:600;color:#f3eefb;padding:8px 16px;border-radius:999px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14)">macOS</span>
          <span style="font-size:18px;font-weight:600;color:#f3eefb;padding:8px 16px;border-radius:999px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14)">Windows</span>
        </div>
      </div>
    </div>

    <div v-else style="position:relative;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;width:100%;flex-grow:1;min-height:0;padding:40px">
      <div v-if="logo" style="position:absolute;display:flex;right:80px;top:160px;width:300px;height:300px;opacity:0.1">
        <img :src="logo" style="width:100%;height:100%">
      </div>
      <div style="position:relative;display:flex;justify-content:space-between;align-items:center;width:100%;font-size:36px;font-weight:500">
        <div style="display:flex;align-items:center">
          <img v-if="logo" :src="logo" style="width:56px;height:56px">
          <div v-if="title !== 'Tsumige'" style="font-size:40px;font-weight:600;color:#f3eefb;margin-left:16px">
            Tsumige
          </div>
        </div>
        <div v-if="dir" style="display:flex;align-items:center;color:#b6abd0">
          <div style="font-size:36px;font-weight:600;margin-right:8px" v-html="dir" />
          <svg v-if="dir === 'FAQ'" width="48" height="48" viewBox="0 -960 960 960" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M120-55.5q-15.5 0-26.5-11T82.5-93q0-15.5 11-26.5t26.5-11h720q15.5 0 26.5 11t11 26.5q0 15.5-11 26.5t-26.5 11H120ZM207-170q-15.5 0-26.5-11t-11-26.5v-193q-32.5-54-50.75-114.25T100.5-639.5q0-59 15.25-117.5t36.75-116q7.5-20 24.5-32.25t38-12.25q26.5 0 44.75 18.5T276-854.5l-5.5 92q-3 48.5 11 93t41.75 78Q351-558 391-537.75t89 20.25q59.5 0 116.5 11.5T697-471.5q43.5 23 68.25 58.5T790-326v118.5q0 15.5-11 26.5t-26.5 11h-355v-32q0-35 24-60.25T480-287.5h120q15.5 0 26.5-11t11-26.5q0-15.5-11-26.5t-26.5-11H480q-66 0-111.75 47T322.5-202v32H207Zm273-392.5q-65.5 0-111.5-46t-46-111.5q0-65.5 46-111.5t111.5-46q65.5 0 111.5 46t46 111.5q0 65.5-46 111.5t-111.5 46Z" /></svg>
          <svg v-else-if="dir === 'Guide'" width="48" height="48" viewBox="0 -960 960 960" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M831-327.5V-558L516-386.5q-17 9-36 9t-36-9l-329.5-180q-10-5.5-14.5-14.25t-4.5-18.75q0-10 4.5-18.75t14.5-14.25l330-179.5q8.5-5 17.25-7t18.25-2q9.5 0 18.25 2t17.25 7l371 202q9 5 14.25 13.75T906-577v249.5q0 15.5-11 26.5t-26.5 11q-15.5 0-26.5-11t-11-26.5Zm-387 173-197-107q-18.5-10-28.75-27.75T208-328v-149.5L444-349q17 9 36 9t36-9l236-128.5V-328q0 21-10.25 38.75T713-261.5l-197 107q-8.5 5-17.5 7t-18.5 2q-9.5 0-18.5-2t-17.5-7Z" /></svg>
          <svg v-else-if="dir === 'Changelog'" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 3H4c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2M5 7h5v6H5zm14 10H5v-2h14zm0-4h-7v-2h7zm0-4h-7V7h7z" /></svg>
        </div>
      </div>
      <div
        :style="`position:relative;display:flex;flex-direction:column;align-items:flex-start;width:100%;max-width:760px;${dir === 'Changelog' ? 'margin-top:auto;margin-bottom:auto;' : ''}`"
      >
        <div tw="text-6xl font-bold" style="color:#f3eefb" v-html="title" />
        <div v-if="description" tw="mt-2 text-4xl" style="display: flex; flex-direction: column; color:#b6abd0" v-html="description" />
      </div>
      <div v-if="dir === 'Changelog'" style="position:relative;display:flex;width:100%;justify-content:flex-end;font-size:36px;color:#b6abd0">
        View full changelog for all changes
      </div>
    </div>
    <div style="display:flex;flex-shrink:0;height:8px;width:100%;background:linear-gradient(90deg, #e8c468, #9b7bff)" />
  </div>
</template>
