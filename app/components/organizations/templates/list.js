module.exports = `
<ul class="list-view">
{{each collection}}<li><a href="/organizations/#{sid}">#{title}</a></li>{{/each}}
</ul>
`
