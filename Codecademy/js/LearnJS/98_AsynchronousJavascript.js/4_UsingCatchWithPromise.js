prom
 .then((resolvedValue) => {
   console.log(resolvedValue);
})
.then(null, (rejectionReason) => {
   console.log(rejectionReason);
});
