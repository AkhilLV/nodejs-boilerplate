const express = require('express')
const router = express.Router()
const members = require('../../Members')
const uuid = require('uuid')

// Gets all members
router.get('/', (req, res) => {
  res.json(members)
})

// Get single members
router.get('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id))

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)))
  } else {
    res.status(400).json({ msg: `Member not found` })
  }
})

// Create Member
router.post('/', (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  }

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Include a name and email' })
  }

  members.push(newMember)
  res.json(members)
})

router.put('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id))

  if (found) {
    const updateMember = "Jane"

  } else {
    res.status(400).json({ msg: `Member not found` })
  }
})

module.exports = router