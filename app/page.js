'use client'
import { Button, ButtonGroup, Input, Page, Select } from '@geist-ui/core'
import { Grid, List, Search } from '@geist-ui/icons'
import Card from './components/Card'

export default function Home() {
  return (
    <Page w="1200px">
      <div className="inline-flex items-center gap-2 w-full">
        <Input
          icon={<Search />}
          className="bg-black"
          placeholder="Search..."
          w="100%"
        />
        <div>
          <ButtonGroup>
            <Button icon={<Grid />} auto scale={0.75} />
            <Button icon={<List />} auto scale={0.75} />
          </ButtonGroup>
        </div>
        <Select placeholder="Add new">
          <Select.Option value="1">Project</Select.Option>
          <Select.Option value="2">Domain</Select.Option>
          <Select.Option value="3">Team</Select.Option>
        </Select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </Page>
  )
}
