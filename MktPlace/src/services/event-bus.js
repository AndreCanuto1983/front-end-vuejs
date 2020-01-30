/**
 * Utilizo o event-bus para se comunicar com componentes que não são parentes, crio basicamente um barramento
 * Se fosse um componente pai e filho, poderia uzar prop ou emit que seria mais tranquilo
 * */
import Vue from 'vue';
export const EventBus = new Vue();