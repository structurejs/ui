module.exports = `
<ul class="list-view">
{{each collection}}<li><a href="/users/#{sid}">#{username} #{firstName} #{lastName}</a></li>{{/each}}
</ul>
`
