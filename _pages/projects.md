---
layout: page
title: 연구주제
permalink: /projects/
description: 아날로그 신호 처리 연구실의 주요 연구 분야 및 진행 과제
nav: false
nav_order: 3
header_centered: true
---

<hr class="section-divider">

<div class="projects">
{% assign sorted_projects = site.projects | sort: "importance" %}
{% if sorted_projects.size > 0 %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
{% else %}
  <div class="member-empty">
    <i class="fa-solid fa-flask"></i>
    <p>연구주제 페이지를 구성 중입니다.</p>
  </div>
{% endif %}
</div>
